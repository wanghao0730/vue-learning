import { defineStore } from 'pinia'
import { userCounterStore } from './user-store/userCounterStore'
import { userCartStore } from './cart-store/userCartStore'
//这个是加载plugin的pinia实例
import Pinia from './plugins'
export {
  userCounterStore,
  userCartStore
}

export default Pinia
