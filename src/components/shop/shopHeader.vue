<template>
  <div v-if="shopProductInfo">

    <!-- shop-header -->
    <!-- 背景蒙版 -->
    <div class="bgimg">
      <img v-if="shopProductInfo.header.img" :src="shopProductInfo.header.img" alt>
      <p></p>
    </div>
    <div class="shopHeader">
      <div class="shopHeaderLogo">
        <a href>
          <img v-if="shopProductInfo.header.img" :src="shopProductInfo.header.img" alt>
        </a>
      </div>
      <div class="shopHeaderName">
        <h3>{{this.shopProductInfo.header.tit}}</h3>
        <p>信瑞购物</p>
      </div>
      <div class="shopHeaderCollect">
        <div>收藏</div>
        <span>{{this.shopProductInfo.header.collect}}万人收藏</span>
      </div>
    </div>
    <!-- search------------ -->
    <div class="allSearch">
      <van-search placeholder="搜索本店商品"/>
    </div>
    <Loading v-if="!shopProductInfo"></Loading>
  </div>
</template>
<script>
import { Search } from "vant";
import Loading from './../../components/common/loading'
export default {
  name: "shopHeader",
  components:{
    'van-search':Search,
    Loading
  },
  props:{
    shopProductInfo:{
      type:Object,
      required:true
    }
  },
};
</script>
<style src='./../../../static/css/reset.css'></style>
<style>

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
  margin-bottom: 20px;
  padding: 0 20px;
}
.allSearch .van-search {
  border-radius: 30px;
  text-align: center;
}
.van-cell{
  font-size: 28px;
  text-align: center;
}
.van-icon-search{
    font-size: 28px;
  }
.van-field__left-icon .van-icon,
.van-field__right-icon .van-icon {
  display: block;
  min-width: 1em;
  line-height: inherit;
  font-size: 28px;
}
</style>
