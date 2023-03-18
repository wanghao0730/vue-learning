<script setup>
import { ref } from "vue";
import Menu from "./component/menu/index.vue";
let collapsed = ref(true);
let selectedKeys = ref(["1"]);
</script>

<template>
  <a-layout style="min-height: 100vh">
    <!-- 菜单数据 -->
    <Menu />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <!-- 内部内容路由切换 -->
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
        }"
      >
        <RouterView v-slot="{ Component }">
          <Transition>
            <component :is="Component"></component>
          </Transition>
        </RouterView>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style></style>
