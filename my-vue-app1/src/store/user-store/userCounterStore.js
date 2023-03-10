import { defineStore } from 'pinia'


export const userCounterStore = defineStore('counter',{
  state:() => ({
    count:45,
    list:[]
  }),
  getters:{
    getCount:state => state.count
  },
  actions: {
    changeCount() {
      setTimeout(() => {
        this.count++
      },1500)
    }
  }
})