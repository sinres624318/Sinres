<template>
  <div class="shopIndex">
    <!-- shop-header -->
    <!-- 背景蒙版 -->
    <div class="bgimg">
      <img src="../../../static/img/shop/shop_background.jpg" alt>
      <p></p>
    </div>
    <div class="shopHeader">
      <div class="shopHeaderLogo">
        <a href>
          <img src="../../../static/img/shop/shopLogo.png" alt>
        </a>
      </div>
      <div class="shopHeaderName">
        <h3>ThinkPad自营旗舰店</h3>
        <p>信瑞自营</p>
      </div>
      <div class="shopHeaderCollect">
        <a href="#">
          <div>收藏</div>
        </a>
        <span>3.4万人收藏</span>
      </div>
    </div>
    <!-- shopNav -->
    <div class="shopNav">
      <div class="shopNavInput">
        <van-search placeholder="搜商品"/>
      </div>
      <div class="shopNavList">
        <div>精选</div>
        <div>商品</div>
      </div>
    </div>
    <!-- shopSwipter -->
    <div class="shopSwipter">
      <van-swipe :autoplay="3000" indicator-color="orange">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img v-lazy="item">
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 关注领券 -->
    <div class="guanzhu">
      <a href>
        <img src="../../../static/img/shop/guanzhu.png" alt>
      </a>
    </div>
    <!-- 精品推荐 -->
    <div class="jingpin">
      <a href>
        <img src="../../../static/img/shop/jingpin.png" alt>
      </a>
    </div>

    <div class="productModel">
      <img src="../../../static/img/shop/shop_content1.png" alt>
      <div class="productModelLink">
        <div class="productModelFirst">
          <a href></a>
        </div>
        <div class="productModelChild">
          <a href></a>
          <a href></a>
          <a href></a>
          <a href></a>
        </div>
      </div>
    </div>
    <!-- shopList -->
    <div class="shopList">
      <productV></productV>
    </div>
  </div>
</template>
<script>
import { Search } from "vant";
import { Swipe, SwipeItem, Lazyload } from "vant";
import productV from './../../components/shop/productV'

export default {
  name: "shopIndex",
  components: {
    "van-search": Search,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    Lazyload,
    productV
  },
  data() {
    return {
      banner: [ 
        "//img10.360buyimg.com/cms/jfs/t1/67085/12/2502/148486/5d0c934dE82024784/d57d816fbb737888.jpg!q70.dpg.webp",
        "//img13.360buyimg.com/cms/jfs/t1/62295/28/2455/474652/5d0c40fbEdb8017cc/4320c0cb6753cc4a.jpg!q70.dpg.webp"
      ]
    };
  }
};
</script>
<style src='./../../../static/css/shop/shopIndex.css'></style>

<style scoped>

</style>


