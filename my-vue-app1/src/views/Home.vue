<script setup>
import {
  ref,
  reactive,
  watchEffect,
  onBeforeUnmount,
  onErrorCaptured,
} from "vue";

//发生错误捕获
onErrorCaptured((err, instance) => {
  console.log({ err, instance });
});

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

/**
 * 递归组件所需数据
 */
const treeData = ref({
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "world" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }],
        },
        { name: "hello" },
        { name: "world" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }],
        },
      ],
    },
  ],
});
//自定义遍历数据
const modelData = ref([
  {
    id: 100,
    label: "若依科技",
    children: [
      {
        id: 101,
        label: "深圳总公司",
        children: [
          {
            id: 103,
            label: "研发部门",
          },
          {
            id: 104,
            label: "市场部门",
          },
          {
            id: 105,
            label: "测试部门",
          },
          {
            id: 106,
            label: "财务部门",
          },
          {
            id: 107,
            label: "运维部门",
          },
        ],
      },
      {
        id: 102,
        label: "长沙分公司",
        children: [
          {
            id: 108,
            label: "市场部门",
          },
          {
            id: 109,
            label: "财务部门",
          },
        ],
      },
    ],
  },
]);
console.log(modelData);
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
    <!-- 递归组件练习 -->
    <!-- <div class="tree" style="margin-top: 50px">
      <TreeCpm :model="treeData" />
    </div> -->
    <div>
      <ul>
        <CustomTree :modelData="modelData[0]" />
      </ul>
    </div>
  </div>
</template>

<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}
.tree {
  cursor: pointer;
  line-height: 1.5;
}
</style>
