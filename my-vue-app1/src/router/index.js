/**
 * vue路由
 */
import {createRouter,createWebHistory} from 'vue-router'
import basicRouter from './basicRouter'
const router = createRouter({
  history:createWebHistory(),
  routes:[...basicRouter]
})

export default router