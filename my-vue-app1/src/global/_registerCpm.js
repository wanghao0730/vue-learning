
/**
 * 自动挂载所有主键的方法
 */
export default {
  install(Vue) {
    //加载所有的主键
    console.log({Vue})
    this.registerAllCpm(Vue)
  },
  registerAllCpm(Vue) {
    const cpms = import.meta.glob('../components/**/*.vue',{eager:true})
    
    console.log({cpms});
  }
}