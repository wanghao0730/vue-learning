<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { userCartStore } from "@/store/";
const cartStore = userCartStore();
console.log(cartStore.changeCart);
const changeVal = () => {
  console.log("dayin");
  cartStore.changeCart("hh");
};
</script>
<script>
export default {
  name: "CartCpm",
};
</script>

<template>
  <div>
    {{ cartStore.cartList }}
  </div>
  <!-- 输入内容会调用防抖的方法 -->
  <input type="text" @input="changeVal" />
</template>
<style scoped></style>
