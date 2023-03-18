
/**
 * 当添加外部属性、第三方库的类实例或非响应式的简单值时，你应该先用 markRaw() 来包装一下它，再将它传给 pinia。下面是一个在每个 store 中添加路由器的例子：
 * @description
 */
import {markRaw} from 'vue'

//导入自己封装的router
import router from '../../router'

export function routerPlugins({store}) { 
  store.router = markRaw(router)
  console.log(store.router);
 }