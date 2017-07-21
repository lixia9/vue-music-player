import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default  new Vuex.Store({
  state: {
    name:"天下霸唱",
    palyUrl:"",
    pic:'',
    backShow:false,
    historyList:JSON.parse(localStorage.getItem("historyList"))||[],
    canplay:true,
    showHistory:false

  },
  getters: {

  }
})
