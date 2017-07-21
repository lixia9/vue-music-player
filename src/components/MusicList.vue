<template>
  <div>
   <div class="searchBox">
    <div class="items">
     <input type="text" placeholder="请输入歌曲或者歌手名称" name="" v-model="key">
    </div>
    <div>  <span @click="search">搜索</span></div>

   </div>

<ul class="list"
  v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="10">
   <li  v-for="song in songList.song.list" @click="play(song)">
    <img  :src="song.album.id | pic" >
    <p>{{song.name}}</p>
    <em>{{song.album.name}}</em>
      <!--  <mt-cell :title="song.name" >
        <span style="font-size:.2rem">{{song.album.name | zj}}</span>
        <img slot="icon" :src="song.album.id | pic" height="24">
      </mt-cell> -->
    </li>
</ul>



</div>
</template>

<script>
  export default {
    name: 'musicList',
    data () {
      return {
        key:"",
        songList:{
          song:{
            list:[]
          }
        },
        param :{
         aggr:1,
         catZhida:1,
         cr:1,
         ct:24,
         flag_qc:0,
         format:'jsonp',
         g_tk:5381,
         hostUin:0,
         inCharset:'utf8',
         loginUin:0,
         lossless:0,
         n:20,
         needNewCode:0,
         new_json:1,
         notice:0,
         outCharset:'utf-8',
         p:1,
         platform:'yqq',
         qqmusic_ver:1298,
         remoteplace:'txt.yqq.center',
         searchid:40680474286645095,
         t:0,
         w:'周杰伦'
       }

     }
   },
   created(){
     // this.getData();
   },
   activated  (){
    this.$store.state.name="天下霸唱";
   },
   mounted(){

   },
   filters: {
    zj (value) {
      return value.substring(0,5)
    },
    pic(f){
      f = f.toString();
      let b = f.substring(f.length-2)*1;

      return 'http://imgcache.qq.com/music/photo/album_300/'+b+'/300_albumpic_'+f+'_0.jpg'
    }
  },
  methods:{
    loadMore(){
       // // 若数据已全部获取完毕

       this.getData();
       this.param.p = this.param.p+1 ;
     console.log(11)
      //
     // alert();
   },
   search(){
     if(this.key){
        this.param.p=1;
      this.songList ={
        song:{
          list:[]
        }
      };
      this.param.w = this.key;
    }else{
      return;
    }

    this.getData();
     // window.callback = function (argument) {
     //   // body...
     //   console.log(argument)
     // }

   },
   play(song){
    this.$store.state.showHistory= false;
    let id = song.album.id.toString();
     this.$store.state.playUrl ="http://ws.stream.qqmusic.qq.com/"+song.id+".m4a?fromtag=46";
     this.$store.state.name =song.name;
     let b = id.substring(id.length-2)*1;
     this.$store.state.pic ='http://imgcache.qq.com/music/photo/album_300/'+b+'/300_albumpic_'+id+'_0.jpg';
     this.$store.state.historyList.push(song)
   try {
  localStorage.setItem("historyList",JSON.stringify( this.$store.state.historyList))
} catch(_) {

}
     this.$router.push("music")
   },
   getData(){
     this.$http.jsonp('http://c.y.qq.com/soso/fcgi-bin/client_search_cp',{
      params : this.param,
      jsonp:"jsonpCallback"
    }).then((response) => {
                // success callback

                if(response.body.data&&this.songList.song.list.length>0){

                 this.songList.song.list= this.songList.song.list.concat(response.body.data.song.list);

               //  console.log( this.songList.song.list)
               }else{
                 this.songList =response.body.data;

                 // this.$set(this.songList,"song",response.body.data.song)
                 //  this.$set(this.songList.song,"list",response.body.data.song.list)
               }
               if(response.body.data.song.list.length==0){
                this.loading = false;
              }

            }, (response) => {
               this.loading = false;
                // error callback
              });
  }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .searchBox{
   margin-top: .65rem;
 }
 .searchBox input{
   -webkit-appearance: none;
   -moz-appearance: none;
   appearance: none;
   border: 0;
   box-sizing: border-box;
   width: 5.4rem;
   height:1rem;
   outline: 0;
   background-color:#010203;
    color: #fff;
   padding-left: .3rem;
 }
 .searchBox{
   display: flex;
 }
 .items{
   flex-grow: 8;
     border-bottom: 1px solid #4C4C4C;

 }
 .searchBox span{

  display: inline-block;
  height: .8rem;
  width: 1.9rem;
  background-color:#010203;
  color: #fff;
  text-align: center;
  line-height: .8rem;
  margin-top: .5rem;
  margin-right:  .1rem;
  font-size: .3rem;
  border: 1px solid #4C4C4C;

}
.list{
  background-color: #0B0B0A;
  font-size: .3rem;
  color: #fff;
}
.list li{
 display: flex;
 margin-top:.2rem;
 border-bottom: 1px solid #212D34;
}
.list li img{
  height: 1rem;
  margin-left: .2rem;
  border-radius: .1rem;
  margin-bottom:.2rem;

}
.list li p{
  line-height:  1rem;
  margin-left: .1rem;
  font-size: .25rem;
    flex-grow: 7;
}
.list li em{
  line-height:  1rem;
  margin-left: .1rem;
  font-size: .25rem;
  color: #666;
   flex-grow:2;
   text-align: right;
   padding-right: .1rem;
   font-size: .2rem;
}
</style>
