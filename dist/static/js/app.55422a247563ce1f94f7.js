webpackJsonp([0],[,,,,,function(t,s,e){function i(t){e(23)}var a=e(0)(e(33),e(18),i,null,null);t.exports=a.exports},function(t,s){},,,function(t,s,e){"use strict";var i=e(1),a=e(30),n=e(15),o=e.n(n),r=e(17),c=e.n(r);i.default.use(a.a),s.a=new a.a({routes:[{path:"/music",name:"Music",component:o.a},{path:"/",name:"MusicList",component:c.a}]})},function(t,s,e){"use strict";var i=e(1),a=e(27);i.default.use(a.a),s.a=new a.a.Store({state:{name:"天下霸唱",palyUrl:"",pic:"",backShow:!1,historyList:JSON.parse(localStorage.getItem("historyList"))||[],canplay:!0,showHistory:!1},getters:{}})},,,,function(t,s,e){function i(t){e(26)}var a=e(0)(e(34),e(22),i,"data-v-93b625ec",null);t.exports=a.exports},function(t,s,e){var i=e(0)(e(35),e(19),null,null,null);t.exports=i.exports},function(t,s,e){function i(t){e(25)}var a=e(0)(e(36),e(21),i,"data-v-61676bfa",null);t.exports=a.exports},function(t,s,e){function i(t){e(24)}var a=e(0)(e(37),e(20),i,null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("mheader"),t._v(" "),e("keep-alive",{attrs:{exclude:"musicbody,music"}},[e("router-view")],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[this.$store.state.canplay?e("musicbody"):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"searchBox"},[e("div",{staticClass:"items"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],attrs:{type:"text",placeholder:"请输入歌曲或者歌手名称",name:""},domProps:{value:t.key},on:{input:function(s){s.target.composing||(t.key=s.target.value)}}})]),t._v(" "),e("div",[e("span",{on:{click:t.search}},[t._v("搜索")])])]),t._v(" "),e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"10"}},t._l(t.songList.song.list,function(s){return e("li",{on:{click:function(e){t.play(s)}}},[e("img",{attrs:{src:t._f("pic")(s.album.id)}}),t._v(" "),e("p",[t._v(t._s(s.name))]),t._v(" "),e("em",[t._v(t._s(s.album.name))])])}))])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content",on:{click:t.hide}},[e("audio",{ref:"music",staticClass:"musicmain",attrs:{autobuffer:"",autoloop:"",loop:"",controls:""}},[e("source",{attrs:{src:this.$store.state.playUrl}})]),t._v(" "),e("div",{class:{musicbody:!0,ro:t.play},style:t.bg}),t._v(" "),e("div",{staticClass:"controls"},[e("div",{staticClass:"bfq"},[e("span",{class:{pauseButton:t.play,playButton:!t.play},on:{click:t.musicplay}})]),t._v(" "),e("div",{staticClass:"songing"},[e("p",{staticClass:"title"},[t._v(t._s(this.$store.state.name))]),t._v(" "),e("span"),t._v(" "),e("span",{style:t.timeW}),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(t.time)+" "),e("em",[t._v(t._s(t.syTime))])])]),t._v(" "),e("div",{staticClass:"ico",style:t.bg})])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"header"},[e("span",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.backShow,expression:"this.$store.state.backShow"}],staticClass:"back",on:{click:t.goback}}),t._v(" "),e("p",[t._v(t._s(this.$store.state.name))]),t._v(" "),e("span",{staticClass:"listmeun",on:{click:t.showList}},[t._v("播放列表")])]),t._v(" "),e("div",{ref:"list",class:{historylist:!0,listh:this.$store.state.showHistory}},[e("ul",[e("p",[t._v("左滑删除，右滑取消")]),t._v(" "),t._l(this.$store.state.historyList,function(s){return e("li",{attrs:{id:s.mid},on:{click:function(e){e.stopPropagation(),t.play(s)}}},[e("span",[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(s.album.name))]),t._v(" "),e("span",{staticClass:"del",on:{click:function(e){e.stopPropagation(),t.del(s.mid)}}},[t._v("删除")])])})],2)])])},staticRenderFns:[]}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,,,,,,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(14),a=e.n(i);s.default={name:"app",components:{mheader:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i);s.default={name:"header",data:function(){return{}},created:function(){},mounted:function(){new this.AlloyFinger(this.$refs.list,{swipe:function(t){console.log(t.direction),"Left"==t.direction?(t.target.querySelectorAll("span")[1].classList.add("none"),t.target.querySelectorAll("span")[2].classList.add("block")):(t.target.querySelectorAll("span")[1].classList.remove("none"),t.target.querySelectorAll("span")[2].classList.remove("block"))}})},methods:{init:function(){1==this.$refs.list.querySelectorAll("li").length&&(this.$store.state.showHistory=!1),[].forEach.call(this.$refs.list.querySelectorAll("li"),function(t){t.querySelectorAll("span")[1].classList.remove("none"),t.querySelectorAll("span")[2].classList.remove("block")})},goback:function(){this.$store.state.showHistory=!1,this.$router.go(-1)},del:function(t){var s=this.$store.state.historyList.filter(function(s){if(s.mid!==t)return s});this.$store.state.historyList=s;try{localStorage.setItem("historyList",a()(this.$store.state.historyList))}catch(t){}this.init()},play:function(t){var s=this;this.$store.state.canplay=!1;var e=t.album.id.toString();this.$store.state.playUrl="//ws.stream.qqmusic.qq.com/"+t.id+".m4a?fromtag=46",this.$store.state.name=t.name;var i=1*e.substring(e.length-2);this.$store.state.pic="//imgcache.qq.com/music/photo/album_300/"+i+"/300_albumpic_"+e+"_0.jpg",this.$router.push("music"),setTimeout(function(){s.$store.state.canplay=!0},100),this.showList()},showList:function(){this.$store.state.showHistory?this.$store.state.showHistory=!1:this.$store.state.showHistory=!0}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(16),a=e.n(i);s.default={name:"music",data:function(){return{}},created:function(){},beforeDestroy:function(){},mounted:function(){},methods:{},components:{musicbody:a.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"musicbody",data:function(){return{play:!1,time:"00:00:00",playTime:0,syTime:"00:00:00",bg:'background-image:url("'+this.$store.state.pic+'")',timeW:" height: 0.06rem;background-color: rgb(247, 247, 247);display: inline-block;position: absolute;width: 0; left: 1.95rem;top: .494rem;"}},created:function(){this.$store.state.backShow=!0},mounted:function(){this.musicplay()},beforeDestroy:function(){this.$store.state.backShow=!1,clearInterval(this.playTime)},methods:{hide:function(){this.$store.state.showHistory=!1},formatSeconds:function(t){var s=parseInt(t),e=0;s>60&&(e=parseInt(s/60),s=parseInt(s%60),e>60&&(parseInt(e/60),e=parseInt(e%60)));var i=""+parseInt(s);return NaN==parseInt(s)&&(i="00"),parseInt(s)<10&&(i="0"+parseInt(s)),NaN==parseInt(e)&&(i="00:00"),i=e>0?parseInt(e)<10?"00:0"+parseInt(e)+":"+i:parseInt(e)+":"+i:"00:00:"+i},musicplay:function(){var t=this;this.play?(this.$refs.music.pause(),clearInterval(this.playTime)):(this.$refs.music.play(),this.playTime=setInterval(function(){NaN!=t.$refs.music.duration&&(t.time=t.formatSeconds(t.$refs.music.duration)),t.syTime=t.formatSeconds(t.$refs.music.duration-t.$refs.music.currentTime),t.timeW="height: 0.06rem;background-color: rgb(247, 247, 247);display: inline-block;position: absolute;width: "+t.$refs.music.currentTime/t.$refs.music.duration*3.85+"rem;left: 1.95rem;top: .494rem;"},1e3)),this.play=!this.play}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(2),a=e.n(i);s.default={name:"musicList",data:function(){return{key:"",songList:{song:{list:[]}},param:{aggr:1,catZhida:1,cr:1,ct:24,flag_qc:0,format:"jsonp",g_tk:5381,hostUin:0,inCharset:"utf8",loginUin:0,lossless:0,n:20,needNewCode:0,new_json:1,notice:0,outCharset:"utf-8",p:1,platform:"yqq",qqmusic_ver:1298,remoteplace:"txt.yqq.center",searchid:0x9086ad03265f68,t:0,w:"周杰伦"}}},created:function(){},activated:function(){this.$store.state.name="天下霸唱"},mounted:function(){},filters:{zj:function(t){return t.substring(0,5)},pic:function(t){return t=t.toString(),"http://imgcache.qq.com/music/photo/album_300/"+1*t.substring(t.length-2)+"/300_albumpic_"+t+"_0.jpg"}},methods:{loadMore:function(){this.getData(),this.param.p=this.param.p+1,console.log(11)},search:function(){this.key&&(this.param.p=1,this.songList={song:{list:[]}},this.param.w=this.key,this.getData())},play:function(t){this.$store.state.showHistory=!1;var s=t.album.id.toString();this.$store.state.playUrl="//ws.stream.qqmusic.qq.com/"+t.id+".m4a?fromtag=46",this.$store.state.name=t.name;var e=1*s.substring(s.length-2);this.$store.state.pic="//imgcache.qq.com/music/photo/album_300/"+e+"/300_albumpic_"+s+"_0.jpg",this.$store.state.historyList.push(t);try{localStorage.setItem("historyList",a()(this.$store.state.historyList))}catch(t){}this.$router.push("music")},getData:function(){var t=this;this.$http.jsonp("//c.y.qq.com/soso/fcgi-bin/client_search_cp",{params:this.param,jsonp:"jsonpCallback"}).then(function(s){s.body.data&&t.songList.song.list.length>0?t.songList.song.list=t.songList.song.list.concat(s.body.data.song.list):t.songList=s.body.data,0==s.body.data.song.list.length&&(t.loading=!1)},function(s){t.loading=!1})}}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(1),a=e(5),n=e.n(a),o=e(9),r=e(10),c=e(4),l=e(8),u=(e.n(l),e(3)),p=e.n(u),m=e(7),h=e.n(m),d=e(6);e.n(d);i.default.use(h.a),i.default.prototype.AlloyFinger=p.a,i.default.use(c.a),e.i(l.sync)(r.a,o.a),new i.default({el:"#app",router:o.a,store:r.a,template:"<App/>",components:{App:n.a}})},function(t,s){}],[38]);
//# sourceMappingURL=app.55422a247563ce1f94f7.js.map