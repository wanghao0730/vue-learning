import { createApp } from 'vue'
import App from './App.vue'
// import { createPinia } from 'pinia'
import Pinia from './store'
import router from './router'
import _registerCpm from './global/_registerCpm'

import "normalize.css"
async function bootstrap() { 
  const app = createApp(App)
  //加载所有主键
  app.use(_registerCpm)

  //加载路由
  app.use(router)
  //注册pinia
  app.use(Pinia)

  app.mount('#app')
 }

 bootstrap()