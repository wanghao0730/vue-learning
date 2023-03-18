<script>
export default {
  name: "TreeCpm",
};
</script>
<script setup>
import { ref, computed } from "vue";
const props = defineProps({
  model: Object,
});

//是否展开
const isOpen = ref(false);

//判断是否有子集数据
const isFolder = computed(() => {
  return props.model.children && props.model.children.length;
});

const toggle = () => {
  isOpen.value = !isOpen.value;
};

//双击
const changeType = () => {
  if (!isFolder.value) {
    props.model.children = [];
    addChild();
    isOpen.value = true;
  }
};
function addChild() {
  props.model.children.push({ name: "new stuff" });
}
console.log("zz", props);
</script>

<template>
  <!-- 如果不存在children也就是只有单层的情况就值显示数据 -->
  <li class="item">
    <div>
      <div :class="{ bold: isFolder }" @click="toggle" @dblclick="changeType">
        {{ model.name }}
        <span v-if="isFolder">[{{ isOpen ? "-" : "+" }}]</span>
      </div>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <TreeCpm v-for="item in model.children" :model="item"> </TreeCpm>
      <li @click="addChild">+</li>
    </ul>
  </li>
</template>
<style lang="scss"></style>
