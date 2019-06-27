<template>
  <div class="wool">
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
        <WoolProduct></WoolProduct>
      
    </div>
  </div>
</template>
<script>
import WoolProduct from './../components/wool/woolProduct'
export default {
  name: "wool",
  components:{
      WoolProduct
  }
};
</script>
<style scoped>
.wool {
  height: 100%;
  overflow-y: auto;
}

.woolProductList {
  padding: 10px 20px 0;
  background: #921b1b;
}
.woolCouponCenter,.woolSign,.woolFreeTrial,.woolBuyNow{
  position: relative;
}
.woolCouponCenter>a,.woolSign>a,.woolFreeTrial>a,.woolBuyNow>a{
  display: block;
  position: absolute;
}
.woolCouponCenter a:nth-of-type(1){
  width: 317px;
  height: 305px;
  top: 18px;
  left: 51px;
}
.woolCouponCenter a:nth-of-type(2){
  width: 145px;
  height: 145px;
  top: 18px;
  left: 389px;
}
.woolCouponCenter a:nth-of-type(3){
  width: 145px;
  height: 145px;
  top: 18px;
  left: 554px;
}
.woolCouponCenter a:nth-of-type(4){
  width: 145px;
  height: 145px;
  left: 389px;
  top: 180px;
}
.woolCouponCenter a:nth-of-type(5){
  width: 145px;
  top: 180px;
  left: 554px;
  height: 145px;
}
/* -------------签到有礼-------------- */
.woolSign a:nth-of-type(1){
  width: 320px;
  height: 330px;
  top: 130px;
  left: 50px;
}
.woolSign a:nth-of-type(2){
  width: 310px;
  height: 162px;
  top: 486px;
  left: 50px;
}
.woolSign a:nth-of-type(3){
  width: 310px;
  height: 162px;
  top: 130px;
  left: 390px;
}
.woolSign a:nth-of-type(4){
  width: 310px;
  height: 334px;
  left: 390px;
  top: 306px;
}
/* ---------免费试用------ */
.woolFreeTrial a:nth-of-type(1){
  width: 314px;
  height: 452px;
  top: 108px;
  left: 48px;
}
.woolFreeTrial a:nth-of-type(2){
  width: 314px;
  height: 452px;
  top: 108px;
  left: 386px;
}
/* ------------------ */
.woolBuyNow a:nth-of-type(1){
  width: 332px;
  height: 224px;
  top: 28px;
  left: 30px;
}
.woolBuyNow a:nth-of-type(2){
  width: 332px;
  height: 224px;
  top: 28px;
  left: 384px;
}
.woolBuyNow a:nth-of-type(3){
  width: 332px;
  height: 224px;
  top: 276px;
  left: 30px;
}
.woolBuyNow a:nth-of-type(4){
  width: 332px;
  height: 224px;
  left: 384px;
  top: 276px;
}
</style>
