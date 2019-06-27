<template>
<div class="classify">
  <ShopHeader></ShopHeader>
 <van-tree-select
    :items="items"
    :main-active-index="mainActiveIndex"
    :active-id="activeId"
    @navclick="onNavClick"
    @itemclick="onItemClick"
  />
</div>
 
</template>
<script>
import  ShopHeader from './../../components/shop/shopHeader'
import { TreeSelect } from "vant";
export default {
  name: "shopClassify",
  components: {
    "van-tree-select": TreeSelect,
    ShopHeader
  },
  data() {
    return {
      items: [
        {
          text: "手机",
          children: [
            {text: "小米9系列",id: 1},
            {text: "小米8 青春版",id: 2},
            {text: "Redmi 7",id: 3},
            {text: "红米6A",id: 4},
            {text: "小米8SE",id: 5},
            {text: "手机配件",id: 6}
          ]
        },
        {
          text: "电视空洗",
          children: [
            {text: "小米电视",id: 1},
            {text: "家庭影院",id: 2},
            {text: "洗衣机",id: 3},
            {text: "空调",id: 4},
            {text: "智能投影",id: 5},
          ]
        },
         {
          text: "智能家电",
          children: [
            {text: "扫地机器人",id: 1},
            {text: "净化器",id: 2},
            {text: "新风机",id: 3},
            {text: "净水器",id: 4},
            {text: "电饭煲",id: 5},
            {text: "电水壶",id: 6}
          ]
        },
         {
          text: "耳机/音响",
          children: [
            {text: "智能音箱",id: 1},
            {text: "蓝牙音响",id: 2},
            {text: "蓝牙耳机",id: 3},
            {text: "有线耳机",id: 4},
          ]
        },
         {
          text: "智能出行",
          children: [
            {text: "体感车",id: 1},
            {text: "滑板车",id: 2},
          ]
        },
         {
          text: "智能硬件",
          children: [
            {text: "手环",id: 1},
            {text: "体重秤",id: 2},
            {text: "插线板",id: 3},
            {text: "摄像机",id: 4},
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
<style scoped>
.van-tree-select {
  font-size: 28px;
}
.van-tree-select__nav-item{
  padding: 30px;
}
.van-tree-select__item{
    padding: 20px;
}
.van-tree-select__nav {
  height: 1024px;
  flex: .8;
}
.van-tree-select__item--active {
  color: black
}
.van-icon-checked:before{
  display: none
}
</style>
