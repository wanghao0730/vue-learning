<script>
export default {
  name: "CustomTree",
};
</script>
<script setup>
import { ref, computed, useAttrs } from "vue";
const props = defineProps({
  modelData: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const attrs = useAttrs();
console.log(attrs);
const isFolder = computed(() => {
  return props.modelData.children && props.modelData.children.length > 0;
});

//每个被递归的组件都创建了自己的实例维护自己的数据
const changeMsg = () => {
  console.log(props.modelData);
};
</script>

<template>
  <ul>
    <li>
      <div @click="changeMsg">
        编号:{{ modelData.id }} - {{ modelData.label }}
        <span v-if="isFolder">[{{ isFolder ? "+" : "-" }}]</span>
      </div>
    </li>
    <ul v-if="isFolder">
      <CustomTree v-for="item in modelData.children" :modelData="item" />
    </ul>
  </ul>
</template>
