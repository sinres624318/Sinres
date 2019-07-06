<template>
  <div class="shop">
    <!--    <transition>-->
      <router-view :shopId="shopId"></router-view>
<!--    </transition>-->
    <div class="shopTabbar">
      <div class="tools-bar-ShopIndex">
        <router-link tag="div" :to="{name:'ShopIndex'}" >
          <i class="van-icon van-icon-home-o"></i>
          <p>首页</p>
        </router-link>
      </div>
      <div class="tools-bar-ShopAllProduct">
        <router-link tag="div" :to="{name:'ShopAllProduct'}">
          <i class="van-icon van-icon-bag-o"></i>
          <p>全部商品</p>
        </router-link>
      </div>
      <div class="tools-bar-ShopPromotion">
        <router-link tag="div" :to="{name:'ShopPromotion'}">
          <i class="van-icon van-icon-hot-o"></i>
          <p>商品促销</p>
        </router-link>
      </div>
      <div class="tools-bar-ShopClassify">
        <router-link tag="div" :to="{name:'ShopClassify'}">
           <i class="van-icon van-icon-apps-o"></i>
          <p>商品分类</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shop",
  components: {
  },
  data() {
    return {
      shopId:'',
    };
  },
  created() {
    // this.shopId='104'
    this.shopId=this.$route.query.shopId;
    console.log(this.$route.query.shopId)
  }
};
</script>
<style src='./../../static/css/reset.css'></style>
<style>
.shop {
  overflow-y: auto;
  height: 100%;
  background-size: 100%;
}
/* shoptabbar */
.shopTabbar{
  position: fixed;
  bottom: 0px;
  height: 96px;
  width: 100%;
  background: #fff;
  z-index:9999999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 0 20px 0 hsla(0, 6%, 58%, 0.6);
}
.shopTabbar>div{
  width: 25%;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
.van-icon {
  font-size: large;
}
.shopTabbar{
  font-size: 20px;
}
.shopTabbar .focus{
  color: red;
}



</style>


