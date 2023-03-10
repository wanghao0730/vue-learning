<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { userCartStore } from "@/store/";
const cartStore = userCartStore();
console.log("zheli", cartStore.$state.secret);
</script>

<template>
  <div>
    {{ cartStore.cartList }}
  </div>
</template>
<style scoped></style>
