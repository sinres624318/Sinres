<template>
  <div class="promotion">
    <!-- shop-header -->
    <!-- 背景蒙版 -->
    <div class="bgimg">
      <img src="../../../static/img/shop_background.jpg" alt>
      <p></p>
    </div>
    <div class="shopHeader">
      <div class="shopHeaderLogo">
        <a href>
          <img src="../../../static/img/shopLogo.png" alt>
        </a>
      </div>
      <div class="shopHeaderName">
        <h3>ThinkPad自营旗舰店</h3>
        <p>信瑞自营</p>
      </div>
      <div class="shopHeaderCollect">
        <div>收藏</div>
        <span>3.4万人收藏</span>
      </div>
    </div>
    <!-- search------------ -->
    <div class="allSearch">
      <van-search placeholder="请输入搜索关键词" v-model="value"/>
    </div>
    <div class="promotionList">
        <p>以下商品参加限时秒杀，欢迎选购</p>
      <productHorizontal></productHorizontal>
      <productHorizontal></productHorizontal>
    </div>
  </div>
</template>
<script>
import { Search } from "vant";
import productHorizontal from "../../copmonents/productHorizontal";
export default {
  name: "promotion",
  components: {
    "van-search": Search,
    productHorizontal
  }
};
</script>
<style scoped>
.shop {
  overflow-y: auto;
  height: 100%;
  background-size: 100%;
}
.bgimg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 500px;
  z-index: -3;
}
.bgimg > p {
  position: absolute;
  top: 0;
  width: 750px;
  height: 500px;
  background: rgba(0, 0, 0, 0.4);
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 40%,
    rgba(0, 0, 0, 0.2) 70%,
    #ffffff 90%
  );
}
/* shop-header  */
.shopHeader {
  width: 750px;
  height: 135px;
  display: flex;
  padding: 20px 20px;
}
.shopHeader img {
  border-radius: 5px;
}
.shopHeaderLogo {
  width: 100px;
  height: 100px;
}
.shopHeaderName {
  width: 336px;
  margin-left: 20px;
  margin-right: 70px;
}
.shopHeaderName > h3 {
  font-size: 32px;
  line-height: 42px;
  color: #fff;
  margin-bottom: 15px;
}
.shopHeaderName > p {
  width: 90px;
  height: 30px;
  background: red;
  border-radius: 3px;
  color: white;
  line-height: 30px;
  text-align: center;
  font-size: 18px;
}
.shopHeaderCollect {
  width: 125px;
  color: white;
}
.shopHeaderCollect > div {
  width: 105px;
  height: 47px;
  font-size: 24px;
  background: red;
  border-radius: 23px;
  line-height: 47px;
  text-align: center;
  margin-bottom: 10px;
}
.shopHeaderCollect > span {
  width: 125px;
  font-size: 17px;
}
/* -----------search--------------- */
.allSearch {
  padding: 0 20px;
}
.allSearch .van-search {
  border-radius: 30px;
  text-align: center;
}
/* promotionList-------------- */
.promotionList {
  background: #fff;
}
.promotionList>p{
    margin-top: 30px;
    height: 60px;
    background: #f7f7f7;
    text-align: center;
    font-size: 24px;
    color: #9a9a9a;
    line-height: 60px;
}
</style>
