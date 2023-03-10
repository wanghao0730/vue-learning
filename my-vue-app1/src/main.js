import { createApp } from 'vue'
import App from './App.vue'
// import { createPinia } from 'pinia'
import Pinia from './store'
import _registerCpm from './global/_registerCpm'
async function bootstrap() { 
  const app = createApp(App)

  //注册所有主键
  app.use(Pinia)
  app.use(_registerCpm)

  app.mount('#app')
 }

 bootstrap()