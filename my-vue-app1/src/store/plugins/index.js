/**
 * @description 以下展示如何使用pinia的插件 给每个store进行增加数据 后面的store都能直接访问
 * @author WangHao
 */
import { createPinia } from 'pinia'
import { SecretPiniaPlugin } from './secretPlugin'
import { debouncePlugins} from './debouncePlugins'
import { routerPlugins} from './routerPlugins'
//创建pinia实例
const pinia = createPinia()

//将插件赋值给pinia
pinia.use(SecretPiniaPlugin)
pinia.use(debouncePlugins)
pinia.use(routerPlugins)
//导出pinia
export default pinia