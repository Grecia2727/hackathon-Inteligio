import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import questions from '@/components/questions'
import home from '@/components/home'
import profile from '@/components/profile'
import register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
      {
      path: '/questions',
      name: 'questions',
      component: questions
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/profile/:total1/:total2',
      name:'profile',
      component:profile
    },
    {
      path:'/register',
      name:'register',
      component:register
    }
  ]
})
