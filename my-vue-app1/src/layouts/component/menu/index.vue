<script setup>
import { provide, ref, readonly } from "vue";
import Menu from "./Menu.vue";
const collapsed = ref(false);
const selectedKeys = ref(["1"]);
provide("selectedKeys", selectedKeys);
</script>

<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <Menu />
  </a-layout-sider>
</template>

<style></style>
