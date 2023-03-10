<script setup>
import { reactive, watchEffect, onBeforeUnmount } from "vue";
import DemoCpm from "@/components/DemoCpm/DemoCpm.vue";
import PiniaCpm from "@/components/PiniaCpm/PiniaCpm.vue";
import CartCpm from "@/components/CartCpm/CartCpm.vue";
const demoProps = reactive({
  searchQuery: "",
  gridColumns: ["name", "power"],
  gridData: [
    { name: "Chuck Norris", power: Infinity },
    { name: "Bruce Lee", power: 9000 },
    { name: "Jackie Chan", power: 7000 },
    { name: "Jet Li", power: 8000 },
  ],
});

const stopWatch = watchEffect(() => {
  console.log(demoProps);
}, {});
onBeforeUnmount(() => {
  console.log("卸载之前");
  stopWatch();
});
</script>

<template>
  <div>
    search
    <input type="text" v-model="demoProps.searchQuery" />
    <DemoCpm v-bind="demoProps">
      <template #header>
        <div class="header">my header</div>
      </template>
    </DemoCpm>
    <PiniaCpm></PiniaCpm>
    <CartCpm />
  </div>
</template>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
</style>
