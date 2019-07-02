<template>
  <van-tree-select
    :items="items"
    :main-active-index="mainActiveIndex"
    :active-id="activeId"
    @navclick="onNavClick"
    @itemclick="onItemClick"
  />
</template>
<script>
import { TreeSelect } from "vant";
export default {
  name: "classify",
  components: {
    "van-tree-select": TreeSelect
  },
  data() {
    return {
      items: [
        {
          text: "热销",
          children: [
            {text: "温州",id: 1},
            {text: "杭州",id: 2},
            {text: "杭州",id: 3},
            {text: "杭州",id: 4},
            {text: "杭州",id: 5},
            {text: "杭州",id: 6}
          ]
        },
        {
          text: "新品",
          children: [
            {text: "温州",id: 1},
            {text: "杭州",id: 2},
            {text: "杭州",id: 3},
            {text: "杭州",id: 4},
            {text: "杭州",id: 5},
            {text: "杭州",id: 6}
          ]
        },
         {
          text: "商务本",
          children: [
            {text: "温州",id: 1},
            {text: "杭州",id: 2},
            {text: "杭州",id: 3},
            {text: "杭州",id: 4},
            {text: "杭州",id: 5},
            {text: "杭州",id: 6}
          ]
        },
         {
          text: "轻薄本",
          children: [
            {text: "温州",id: 1},
            {text: "杭州",id: 2},
            {text: "杭州",id: 3},
            {text: "杭州",id: 4},
            {text: "杭州",id: 5},
            {text: "杭州",id: 6}
          ]
        }
      ],
      // 左侧高亮元素的index
      mainActiveIndex: 0,
      // 被选中元素的id
      activeId: 1
    };
  },
  methods: {
    onNavClick(index) {
      this.mainActiveIndex = index;
    },
    onItemClick(data) {
      this.activeId = data.id;
    }
  }
};
</script>
