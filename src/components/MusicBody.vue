  <template>
    <div @click="hide" class="content">
     <audio autobuffer autoloop loop controls ref="music"  class="musicmain">
       <source :src=" this.$store.state.playUrl ">
       </audio>
       <div :class="{'musicbody':true,ro:play}  " :style="bg">
       </div>
       <div class="controls">

        <div class="bfq">
          <span :class="{pauseButton:play,playButton:!play}"  @click="musicplay"></span>
          <!--  <span :class="{pauseButton:play,playButton:!play}"></span>
           <span class="title">周杰伦-告白气球</span>
           <span class="baring"></span>
           <span class="time">asdads</span> -->
         </div>
         <div class="songing">
           <p class='title'>{{ this.$store.state.name }}</p>
           <span></span>
           <span :style="timeW"></span>
           <p class="time">{{time}} <em>{{syTime}}</em></p>
         </div>
         <div class="ico" :style="bg">

         </div>
       </div>
     </div>
   </template>

   <script>
    export default {
      name: 'musicbody',
      data () {
        return {
         play:false,
         time:"00:00:00",
         playTime:0,
         syTime:"00:00:00",
         bg:'background-image:url("'+this.$store.state.pic+'")',
         timeW:" height: 0.06rem;background-color: rgb(247, 247, 247);display: inline-block;position: absolute;width: 0; left: 1.95rem;top: .494rem;"
       }
     },
     created(){

       this.$store.state.backShow=true;

     },
     mounted(){
      this.musicplay();
     },
     beforeDestroy(){
       this.$store.state.backShow=false;

      // this.$refs.music.pause();

       clearInterval( this.playTime);

    },
    methods:{
     hide(){
       this.$store.state.showHistory= false;
     },
     formatSeconds(value) {
      var theTime = parseInt(value);// 秒
      var theTime1 = 0;// 分
      var theTime2 = 0;// 小时
      if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
        if(theTime1 > 60) {
          theTime2 = parseInt(theTime1/60);
          theTime1 = parseInt(theTime1%60);
        }
      }
      var result = ""+parseInt(theTime);

      if(parseInt(theTime)<10){
        result = "0"+parseInt(theTime)
      }
      if(theTime1 > 0) {
        if(parseInt(theTime1)<10){
          result = "00:0"+parseInt(theTime1)+":"+result;
        }else{
          result = ""+parseInt(theTime1)+":"+result;
        }

      }else{
        result = "00:00:"+result;
      }
      if(result.indexOf("NaN")!=-1){
        result="00:00:00"
      }
      return result;
    },
    musicplay(){
      if(!this.play){
        this.$refs.music.play();
        this.playTime = setInterval(()=>{
          if( this.$refs.music.duration!=NaN){
           this.time =  this.formatSeconds(this.$refs.music.duration);
         }
         this.syTime =this.formatSeconds(this.$refs.music.duration-this.$refs.music.currentTime);
         this.timeW =`height: 0.06rem;background-color: rgb(247, 247, 247);display: inline-block;position: absolute;width: ${(this.$refs.music.currentTime/this.$refs.music.duration)*3.85}rem;left: 1.95rem;top: .494rem;`
       },1000)
      }else{
       this.$refs.music.pause();
       clearInterval( this.playTime);
     }
     this.play =!this.play;
   }
  }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .content{
    position:absolute;
    width:100%;
    height:100%
  }
    .musicmain{
      display: none;
    }
    .controls{
      position: absolute;
      height: 1.5rem;
      width: 100%;
      bottom: 0;
      left: 0;
      background-color: #010203;
      display: flex;
    }
    .musicbody{
     position: absolute;
     top:45%;
     left: 50%;
     width: 3.8rem;
     height: 3.8rem;
     border-radius: 50%;
     transform:translate3d(-50%,-50%,0);
     background-size: 100%;

   }
   .ro{
     animation: roates 5s linear infinite;
     transform-origin: left top;
   }
   @keyframes roates
   {
    from {

      transform: rotate(0) translate3d(-50%,-50%,0)
    }
    to {transform: rotate(360deg) translate3d(-50%,-50%,0)}
  }
  .playButton{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border:2px solid #fff;
    border-radius: 50%;
    margin-top:.17rem;
    margin-left:.3rem;

  }
  .playButton:before{
   content: "";
   display: inline-block;
   position: relative;
   margin-left: .35rem;
   margin-bottom: .19rem;
   width: 0;
   height: 0;
   border-left: 10px solid transparent;
   border-right: 10px solid transparent;
   border-bottom: 20px solid #fff;
   transform: rotate(90deg);
  }
  .pauseButton{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border:2px solid #fff;
    border-radius: 50%;
    margin-top:.17rem;
    margin-left:.3rem;

  }
  .pauseButton:before{
   content: "";
   display: inline-block;
   position: relative;
   margin-left: .36rem;
   margin-bottom: .19rem;
   width:.2rem;
   height: .4rem;
   border-left: 2px solid #fff;
   border-right: 2px solid #fff;


  }
  .bfq{
    height: 100%;
    width: 1.5rem;

  }
  .songing{
   width: 4.5rem;
   text-align: left;
  }
  .title{
   color: white;
   font-size: .3rem;
   margin-top: .2rem;
   text-align: center;
   overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .songing span{
    display: block;
    background-color: hsla(0,0%,100%,.5);
    height: .05rem;
    width: 80%;
    margin: .3rem auto 0  auto  ;
  }
  .ico{
    height: 100%;
    width:1.5rem;
    border-radius: 50%;
    background-size: 100%;
  }
  .time{
    text-align: left;
    margin-left: .4rem;
    margin-top: .2rem;
    font-size: .22rem;
    color: #fff;
  }
  .time em{
   float: right;
   display: inline-block;
   padding-right: .4rem;
  }

  </style>
