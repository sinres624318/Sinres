<template>
  <div class="classify" v-if="shopClassIfyInfo">
    <ShopHeader :shopProductInfo="shopClassIfyInfo"></ShopHeader>
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
  import ShopHeader from './../../components/shop/shopHeader'
  import {TreeSelect} from "vant";

  export default {
    name: "shopClassify",
    components: {
      "van-tree-select": TreeSelect,
      ShopHeader,
      Loading
    },
    data() {
      return {
        shopClassIfyInfo: {},

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
    props: {
      shopId: {
        type: String,
        required: true
      }
    },
    created() {
      this.axios.get("http://10.35.162.104:9005/shop/" + this.shopId + "/classify").then((data) => {
        this.shopClassIfyInfo = data.data;
        console.log(this.shopClassIfyInfo)
      }).catch((err) => {
        console.log('err')
      })
    }
  };
</script>
<style src='./../../../static/css/reset.css'></style>
<style>
  .van-tree-select {
    font-size: 28px;
    height: 1024px;
  }
  .van-tree-select__content{
    height: 1024px;
  }
  .van-tree-select__nav-item {
    padding: 30px;
  }

  .van-tree-select__item {
    padding: 20px;
  }

  .van-tree-select__nav {
    height: 1024px;
    flex: .8;
  }

  .van-tree-select__item--active {
    color: black
  }

  .van-icon-checked:before {
    display: none
  }
</style>
