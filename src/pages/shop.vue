<template>
  <div class="shop">
    <router-view></router-view>
    <van-tabbar
  v-model="active"
  active-color="orange"
  inactive-color="#000"
>
      <van-tabbar-item replace :to="{name:'ShopIndex'}" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace :to="{name: 'ShopAllProduct'}" icon="bag-o">全部商品</van-tabbar-item>
      <van-tabbar-item replace :to="{name:'ShopPromotion'}" icon="hot-o">商品促销</van-tabbar-item>
      <van-tabbar-item replace :to="{name:'ShopClassify'}" icon="apps-o">商品分类</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: "shop",
  components: {
    'van-tabbar':Tabbar,
    'van-tabbar-item':TabbarItem,
  },
  data() {
    return {
    
    };
  }
};
</script>

<style>
.shop {
  overflow-y: auto;
  height: 100%;
  background-size: 100%;
}
.van-tabbar{
  height: 96px;
}
.van-tabbar-item{
  font-size: 20px;
  height: 96px;
}
.van-icon{
  font-size: large;
}

</style>


