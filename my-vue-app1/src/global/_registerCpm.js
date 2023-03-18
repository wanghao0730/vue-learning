
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
    
    Object.entries(cpms).map(([key,module]) => {
      console.log({key,module});
      if (module.default?.name) {
        Vue.component(module.default?.name,module.default)
      }
    })
  }
}