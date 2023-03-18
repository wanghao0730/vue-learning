<script setup>
import { inject } from "vue";
import MenuItem from "./MenuItem.vue";

const msg = inject("selectedKeys");
console.log(msg);
</script>

<template>
  <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
    <MenuItem />
  </a-menu>
</template>

<style></style>
