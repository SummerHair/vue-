import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import friend from '@/components/friend'
import find from '@/components/find'
import recommend from '@/components/recommend'
import ranking from '@/components/ranking'
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',components:{one:find,two:recommend}},
    {path:'/find',
    components:{one:find,two:recommend}},
    {path:'/find/recommend',components:{one:find,two:recommend}},
    {path:'/find/ranking',components:{one:find,two:ranking}},
    {path:'/friend',components:{three:friend}}
  ]
})
