<template>
  <div class="wool">
    <div class="woolHeader">
      <NavBar>
        <template v-slot:left>
          <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
        </template>
        <template v-slot:title>
          <div class="title">精品羊毛</div>
        </template>
        <template v-slot:right>
          <div class="right iconfont">
            <i class="iconfont" @click="$router.push({path:'/classIfy'})">&#xe684;</i>
            <i class="iconfont" @click="moreMenuClickHandle">&#xe670;</i>
          </div>
        </template>
      </NavBar>
      <MoreMenu v-if="flag" @maskClickHandle="maskClickHandle"></MoreMenu>
    </div>
    <!-- ---------headerEnd-------------- -->
    <div class="woolBanner">
      <img src="../../static/img/wool/wool-banner.png" alt="尽情领优惠，一键薅羊毛">
    </div>
    <div>
      <img src="../../static/img/wool/tiantian.png" alt="天天抢好券，优惠响不停">
    </div>
    <div class="woolCouponCenter">
      <img src="../../static/img/wool/lingquan.png" alt="领券中心">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
    <div class="woolSign">
      <img src="../../static/img/wool/woolSign.png" alt="签到有礼">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
    <div class="woolFreeTrial">
      <img src="../../static/img/wool/wool-free-trial.png" alt="免费试用">
      <a href="#"></a>
      <a href="#"></a>
    </div>
    <div class="woolBuyNow">
      <img src="../../static/img/wool/wool-buy-now.png" alt="立即抢购">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
    <div class="woolTodayExplosives">
      <img src="../../static/img/wool/Today's explosives.png" alt="今日爆品">
    </div>
    <div class="woolProductList">
      <WoolProduct :woolProductInfoHandle="woolProductInfo"></WoolProduct>
    </div>
  </div>
</template>
<script>
  import WoolProduct from './../components/wool/woolProduct'
  import NavBar from "./../components/common/navBar";
  import MoreMenu from "../components/common/moreMenu";
  import {wool} from './../api/url';
  export default {
    name: "wool",
    components: {
      WoolProduct,
      NavBar,
      MoreMenu
    },
    data() {
      return {
        woolProductInfo:{},
        flag: false
      }
    },
    methods: {
      backClickHandle() {
        this.$router.go(-1);
      },
      moreMenuClickHandle() {
        console.log(1);
        this.flag = true;
      },
      maskClickHandle(val) {
        this.flag = val;
      }
    },
    // https://www.easy-mock.com/mock/5d031a44641c58517626f2b5/example/woolProduct
    created() {
      this.axios.get('wool').then((response) => {
        this.woolProductInfo = response.data;
        console.log(this.woolProductInfo)
      }).catch((error) => {
        console.log(error)
      })
    }
  };
</script>
<style src="../../static/css/wool.css"></style>

<style scoped>

</style>
