/**
 * @description 以下插件功能可以在store里面添加自己的debounce进行防抖 
 */
import debounce from 'lodash/debounce'
export function debouncePlugins({app,options,store}) {  
  // console.log({options})
  //判断是否存在节流的插件
  if(options.debounce){
    //使用新的action去覆盖那些需要debounce的action原方法
    /**
     * 这里最终返回的结果是 {changeCart:debounce()} 又因为这里是用了return {changeCart:debounce()} 
     * 所以就是进行了覆盖 可以理解成这里返回的对象里面的changeCart 对cart-store里面的方法进行了替换 因为plugins是可以直接返回对象形式对store进行属性扩展的
     */
    return Object.keys(options.debounce).reduce((debounceActions,action)=>{
      console.log({debounceActions,action});
      //进行参数覆盖
      debounceActions[action] = debounce(
        store[action],
        options.debounce[action]
      )
      return debounceActions
    },{})
  }

}