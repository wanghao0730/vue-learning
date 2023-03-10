/**
 * @description 这里导出个生成密钥的方法 indexjs是入口会加载所有的plugins
 */
import { ref } from 'vue'
const globalSecret = ref('secret')
export function SecretPiniaPlugin({pinia,app,options,store}) {
  /**
   * 如果您想将新的状态属性添加到 store 或打算在 hydration 中使用的属性，您必须在两个地方添加它：
  在 store 上，因此您可以使用 store.myState 访问它
  在 store.$state 上，因此它可以在 devtools 中使用，并且在 SSR 期间被序列化。
   */
  //这个ref会被自动解包 在其他的store可以直接使用
  store.$state.secret = globalSecret
  store.secret = globalSecret
  // return { secret: 'the cake is a lie' }
}