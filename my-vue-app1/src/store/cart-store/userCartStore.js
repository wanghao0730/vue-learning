import { defineStore } from 'pinia'

export const userCartStore = defineStore('cart',{
  state:() => ({
    message:'',
    cartList:[{name:'www',age:'456'}]
  }),
  getters:{
    getCarts:state => state.cartList
  },
  actions:{
    changeCart(payload) {
      console.log(payload)
      this.cartList.push({name:'zeh',age:18})
    }
  },
  //自定义属性会被注册的插件拦截进行防抖操作
  debounce:{
    changeCart:3000
  }
})