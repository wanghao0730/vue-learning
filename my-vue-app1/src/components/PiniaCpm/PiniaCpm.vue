<script>
export default {
  name: "PiniaCpm",
};
</script>
<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { userCounterStore } from "@/store/";
const userStore = userCounterStore();

console.log("查看是否有全局注册的密钥", userStore.secret);
const changeState = () => {
  userStore.$patch((state) => {
    state.count++;
    state.list.push({ name: "wanghao" });
  });
};

//直接重置store的数据
const resetState = () => {
  userStore.$reset();
};

/**
 * 调用 store里面的actions方法
 */
//直接调用方法 里面的方法是可以直接进行异步操作的
userStore.changeCount();
/**
 * 可以通过 store 的 $subscribe() 方法查看状态及其变化，类似于 Vuex 的 subscribe 方法。 与常规的 watch() 相比，使用 $subscribe() 的优点是 subscriptions 只会在 patches 之后触发一次（例如，当使用上面的函数版本时）。
 */
// changeCount();
userStore.$subscribe((mutation, state) => {
  console.log({ mutation, state });

  //当数据变化的时候可以进行本地持久化
  // window.localStorage.setItem('userStore',JSON.stringify(state.count))
});

/**
 * 如果需要对pinia中的getters属性进行更多操作可以利用computed进行
 */

const doCount = computed(() => {
  return userStore.getCount * 2;
});
</script>

<template>
  <div>
    <button @click="changeState">++</button>
    <button @click="resetState">重置数据</button>
    <p>{{ doCount }}</p>
  </div>
</template>
<style scoped></style>
