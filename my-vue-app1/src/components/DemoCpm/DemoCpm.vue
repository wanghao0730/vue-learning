<script>
//这里可以关闭默认父组件传递到子组件根目录的数据 继承
//我们下面使用了$attrs获取父组件传递给子组件的数据 避免了我们的数据父子传递的时候要进行申明更多的参数设置
export default {
  inheritAttrs: false,
  name: "DemoCpm",
};
</script>
<script setup name="DemoCpm">
import { useAttrs, onMounted, ref, computed, useSlots } from "vue";
//封装高阶主键的时候可以使用这种方法接受数据
const attrs = useAttrs();
//获取slots
const slots = useSlots();
console.log(slots);

//给每个参数进行编号 1正序排列 -1降序
const sortKey = ref(""); //记录用户点击切换的数据
const sortOrders = ref({});
attrs.gridColumns.forEach((key) => {
  sortOrders.value[key] = 1;
});

const capitalize = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * 过滤数据
 */
const filteredHeroes = computed(() => {
  //判断父组件是否有数据内容
  let searchQuery = attrs.searchQuery && attrs.searchQuery.toLowerCase();
  let order = sortOrders.value[sortKey.value] || 1;
  console.log(order);
  //拷贝一份避免与父组件的造成修改
  let heroes = attrs.gridData;
  if (searchQuery) {
    //拿到数据进行排序
    heroes = heroes.filter((row) => {
      //查找是否有与用户输入内容相同的数据
      return Object.keys(row).some((key) => {
        //row[key]也就是例如 Chuck Norris这个名称与用户输入的做比较 大于-1表示找到对应数据了
        return String(row[key]).toLowerCase().indexOf(searchQuery) > -1;
      });
    });
  }
  //如果用户点击了排序这里就会有值
  if (sortKey.value) {
    //判断名称
    heroes = heroes.slice().sort((a, b) => {
      //a为前一个数据 b为后一个数据 a[sortKey] 相当于a['name'] 例如第一个Chuck Norris
      //对比 a b
      a = a[sortKey.value];
      b = b[sortKey.value];
      debugger;
      return (a === b ? 0 : a > b ? 1 : -1) * order;
    });
  }
  console.log("变换", heroes);
  return heroes;
});
//点击排序
const sortBy = (key) => {
  console.log(key);
  //点击后记录当前的key key就是标题的参数名称
  sortKey.value = key;
  //然后要记录当前的sortOrders[key] 也就是拿到对应的数据判断它是升序还是降序
  //整数* -1 为 -1 变换的话就是-1* -1 = 1
  sortOrders.value[key] = sortOrders.value[key] * -1;
};
</script>

<template>
  <table>
    <thead>
      <tr>
        <th
          v-for="key in attrs.gridColumns"
          @click="sortBy(key)"
          :class="{ active: sortKey == key }"
        >
          {{ capitalize(key) }}
          <span
            class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"
          ></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="entry in filteredHeroes">
        <td v-for="key in attrs.gridColumns">
          {{ entry[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
