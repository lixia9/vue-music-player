import Vue from 'vue'
import Router from 'vue-router'
import Music from '@/components/Music';
import MusicList from '@/components/MusicList';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
      {
      path: '/',
      name: 'MusicList',
      component: MusicList
    }
  ]
})
