<template>
  <div>


    <div class="header">
      <span class="back" v-show="this.$store.state.backShow" @click="goback"></span>
      <p>{{this.$store.state.name}}</p>
      <span class="listmeun" @click="showList">播放列表</span>
    </div>
    <div :class="{historylist:true,listh:this.$store.state.showHistory}" ref="list">
      <ul>
       <p>左滑删除，右滑取消</p>
        <li v-for="item in this.$store.state.historyList" @click.stop="play(item)" :id="item.mid">
          <span>{{item.name}}</span>
          <span class="name">{{item.album.name}}</span>
          <span class="del"  @click.stop="del(item.mid)">删除</span>
        </li>
          </ul>
        </div>
      </div>
    </template>

    <script>
      export default {
        name: 'header',
        data () {
          return {

          }
        },
        created(){

        },
      mounted(){

     var af = new this.AlloyFinger(this.$refs.list, {

     swipe: (e)=>{
      console.log(e.direction)
     if(e.direction=="Left"){
       e.target.querySelectorAll('span')[1].classList.add("none");
      e.target.querySelectorAll('span')[2].classList.add("block");
     }else{
       e.target.querySelectorAll('span')[1].classList.remove("none");
      e.target.querySelectorAll('span')[2].classList.remove("block");
     }



     },

});
      },
        methods:{
          init(){

            if(this.$refs.list.querySelectorAll('li').length==1){
               this.$store.state.showHistory=false
            }
            [].forEach.call( this.$refs.list.querySelectorAll('li'),(item)=>{
             item.querySelectorAll('span')[1].classList.remove("none");
             item.querySelectorAll('span')[2].classList.remove("block");

            })
          },
         goback(){
          this.$store.state.showHistory= false;
          this.$router.go(-1)
        },
        del(id){
       var ls = this.$store.state.historyList.filter((song)=>{if(song.mid!==id){
       return song;
      }})
       this.$store.state.historyList = ls;
     try {
        localStorage.setItem("historyList",JSON.stringify( this.$store.state.historyList))
      } catch(_) {

      }
       this.init();
        },
         play(song){
         this.$store.state.canplay = false;
         let id = song.album.id.toString();
         this.$store.state.playUrl ="http://ws.stream.qqmusic.qq.com/"+song.id+".m4a?fromtag=46";
         this.$store.state.name =song.name;
         let b = id.substring(id.length-2)*1;
         this.$store.state.pic ='http://imgcache.qq.com/music/photo/album_300/'+b+'/300_albumpic_'+id+'_0.jpg';
         this.$router.push("music")
         setTimeout(()=>{ this.$store.state.canplay = true;},100)

         this.showList();
     },
        showList(){
            this.$store.state.showHistory?this.$store.state.showHistory=false:this.$store.state.showHistory=true

       }
     }
   }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
   .header{
    position: fixed;
    top: 0;
    left: 0;
    color: #fff;
    width: 100%;
    height: 1rem;
    background-color: #010203;
    font-size: .4rem;
    line-height: 1rem;
    text-align: center;
    z-index: 999;
    display: flex;
    justify-content: center;
  }
  .back{
    position: absolute;
    top: .3rem;
    left: .4rem;
    width: .3rem;
    height: .3rem;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform:rotate(130deg);
  }
  .listmeun{
    position: absolute;
    right: .3rem;
    color: #fff;
    font-size: .3rem;

  }

  .historylist{
   position: fixed;
   height: 0;
   background-color: #010203;
   bottom:0;
   right: 0;
   color: #fff;
   width: 100%;
   transition: height .5s;
   z-index: 999;
   overflow: hidden;
   overflow-y: scroll;
   -webkit-overflow-scrolling : touch;
 }
 .listh{
  height:50vh;
  color:#AAC7E4;
}
.historylist ul p{
 text-align: center;
 font-size: .2rem;
 color: #fff;
 margin-top:.1rem;

}
.historylist li{
  line-height: .5rem;
  padding-bottom: .2rem;
  margin-left: .2rem;
  border-bottom: 1px solid #222;
  user-select: none;
}

.historylist li span:nth-child(1){
  color: #fff;
  font-size: .3rem;
}
.name{
 float: right;
 font-size: .2rem;
 margin-right: .2rem;
 line-height: .5rem;
 margin-top: .25rem;
 opacity: 100;
 transition: opacity .5s;
}
.del{
 position: absolute;
 right: .2rem;
 font-size: .2rem;
 display: inline-block;
 background-color: #E1572A;
 color: #fff;
 margin-top:0.2rem;
 width: 1rem;
 text-align: center;
 opacity: 0;
 transition: opacity .5s;

}
.none{
opacity: 0;
}
.block{
opacity: 100;
}

</style>
