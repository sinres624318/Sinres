<template>
<div class="classify" v-if="shopClassIfyInfo">
  <ShopHeader></ShopHeader>
 <van-tree-select
    :items="this.shopClassIfyInfo.items"
    :main-active-index="mainActiveIndex"
    :active-id="activeId"
    @navclick="onNavClick"
    @itemclick="onItemClick"
  />
  <Loading v-if="!shopClassIfyInfo"></Loading>
</div>
 
</template>
<script>
  import Loading from './../../components/common/loading'
import  ShopHeader from './../../components/shop/shopHeader'
import { TreeSelect } from "vant";
export default {
  name: "shopClassify",
  components: {
    "van-tree-select": TreeSelect,
    ShopHeader,
    Loading
  },
  data() {
    return {
      shopClassIfyInfo:{},

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
  },
  created(){
    this.axios.get("https://www.easy-mock.com/mock/5d031a44641c58517626f2b5/example/shopClassIfyInfo").then((data)=>{
      this.shopClassIfyInfo=data.data;
    }).catch((err)=>{
      console.log('err')
    })
  }
};
</script>
<style src='./../../../static/css/reset.css'></style>
<style>
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
