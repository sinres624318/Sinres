<template>
  <div class="patPat">
    <div class="patPatBanner">
      <van-swipe :autoplay="3000" indicator-color="orange">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img v-lazy="item">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="patPatCard">
      <div class="patPatCardLeft">
        <a href="#">
          <img src="../../static/img/patPat/pat-cat-left.gif" alt="拍拍夺宝岛">
        </a>
      </div>
      <div class="patPatCardRight">
        <div class="patPatCardRightTop">
          <a href="#">
            <img src="./../../static/img/patPat/jdbjk.png" alt="京东备件库">
          </a>
        </div>
        <div class="patPatCardRightBottom">
          <a href="#">
            <img src="./../../static/img/patPat/jdzm.png" alt="京东转卖">
          </a>
          <a href="#">
            <img src="./../../static/img/patPat/ppyj.png" alt="拍拍验机">
          </a>
        </div>
      </div>
    </div>
    <div class="patPatlike">
      <img src="./../../static/img/patPat/cnxh.png" alt>
    </div>
    <div class="likeIntroduceList">
      <div class="likeIntroduceProduct">
        <a href="#">
          <div class="likeIntroduceProductImg">
            <img src="./../../static/img/patPat/likeIntroduceProduct-1.png" alt="猜你喜欢的商品">
          </div>
          <div class="likeProductDescribe">
            <p>唐人（TR)JZT—279全新未开封 多层防爆钢化玻璃 猛火爆炒 熄火保护 节能燃气 台嵌两用双灶 天然气</p>
            <i>￥</i>
            <span>9999</span>
          </div>
        </a>
      </div>
      <div class="likeIntroduceProduct">
        <a href="#">
          <div class="likeIntroduceProductImg">
            <img src="./../../static/img/patPat/likeIntroduceProduct-1.png" alt="猜你喜欢的商品">
          </div>
          <div class="likeProductDescribe">
            <p>唐人（TR)JZT—279全新未开封 多层防爆钢化玻璃 猛火爆炒 熄火保护 节能燃气 台嵌两用双灶 天然气</p>
            <i>￥</i>
            <span>9999</span>
          </div>
        </a>
      </div>
      <div class="likeIntroduceProduct">
        <a href="#">
          <div class="likeIntroduceProductImg">
            <img src="./../../static/img/patPat/likeIntroduceProduct-1.png" alt="猜你喜欢的商品">
          </div>
          <div class="likeProductDescribe">
            <p>唐人（TR)JZT—279全新未开封 多层防爆钢化玻璃 猛火爆炒 熄火保护 节能燃气 台嵌两用双灶 天然气</p>
            <i>￥</i>
            <span>9999</span>
          </div>
        </a>
      </div>
      <div class="likeIntroduceProduct">
        <a href="#">
          <div class="likeIntroduceProductImg">
            <img src="./../../static/img/patPat/likeIntroduceProduct-1.png" alt="猜你喜欢的商品">
          </div>
          <div class="likeProductDescribe">
            <p>唐人（TR)JZT—279全新未开封 多层防爆钢化玻璃 猛火爆炒 熄火保护 节能燃气 台嵌两用双灶 天然气</p>
            <i>￥</i>
            <span>9999</span>
          </div>
        </a>
      </div>
      <div class="likeIntroduceProduct">
        <a href="#">
          <div class="likeIntroduceProductImg">
            <img src="./../../static/img/patPat/likeIntroduceProduct-1.png" alt="猜你喜欢的商品">
          </div>
          <div class="likeProductDescribe">
            <p>唐人（TR)JZT—279全新未开封 多层防爆钢化玻璃 猛火爆炒 熄火保护 节能燃气 台嵌两用双灶 天然气</p>
            <i>￥</i>
            <span>9999</span>
          </div>
        </a>
      </div>
      <div class="likeIntroduceProduct">
        <a href="#">
          <div class="likeIntroduceProductImg">
            <img src="./../../static/img/patPat/likeIntroduceProduct-1.png" alt="猜你喜欢的商品">
          </div>
          <div class="likeProductDescribe">
            <p>唐人（TR)JZT—279全新未开封 多层防爆钢化玻璃 猛火爆炒 熄火保护 节能燃气 台嵌两用双灶 天然气</p>
            <i>￥</i>
            <span>9999</span>
          </div>
        </a>
      </div>
    </div>
    <!-- 闲置卖钱 -->
    <div class="patPatNavigation"></div>
    <!-- 拍拍专享 -->
    <div class="patPatExclusive">
      <a href="#"><img src="./../../static/img/patPat/exclusive1.png" alt=""></a>
      <a href="#"><img src="./../../static/img/patPat/exclusive2.png" alt=""></a>
      <a href="#"><img src="./../../static/img/patPat/exclusive3.png" alt=""></a>
      <a href="#"><img src="./../../static/img/patPat/exclusive4.png" alt=""></a>
    </div>
    <!-- 专属推荐 -->
    <div class="patPatRecommend">
      <a href="#">
        <img src="./../../static/img/patPat/brilliant.png" alt>
      </a>
    </div>
    <!-- 商品列表 -->
    <div class="patPatBrilliantList">  
        <PatPatProduct></PatPatProduct>
    </div>
  </div>
</template>
<script>
import PatPatProduct from './../components/patPat/patPatProduct'
import { Swipe, SwipeItem, Lazyload } from "vant";

export default {
  name: "patPat",
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    Lazyload,
    PatPatProduct
  },
  data() {
    return {
      banner: [
        "../../static/img/patPat/pat-banner1.png",
        "../../static/img/patPat/pat-banner2.png"
      ]
    };
  }
};
</script>

<style scoped>
.patPat {
  height: 100%;
  overflow-y: auto;
}
.patPatCard {
  height: 222px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.patPatCardLeft {
  width: 314px;
  height: 192px;
  margin-right: 10px;
  display: flex;
}
.patPatCardRightTop > a {
  display: block;
  width: 380px;
  height: 90px;
  margin-bottom: 10px;
}
.patPatCardRightBottom {
  display: flex;
}
.patPatCardRightBottom > a {
  display: block;
  width: 186px;
  height: 92px;
}
.patPatCardRightBottom > a:nth-child(1) {
  margin-right: 10px;
}

/* 猜你喜欢的产品------ */
.likeIntroduceList {
  background-color: #f1f1f1;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  display: -webkit-box;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 4px;
}
::-webkit-scrollbar {
  display: none; /*隐藏滚轮*/
}
.likeIntroduceProduct {
  width: 220px;
  height: 362px;
  margin-top: 4px;
  overflow: hidden;
  background-color: #fff;
  margin-right: 4px;
  display: flex;
}
.likeIntroduceProductImg {
  width: 200px;
  height: 200px;
}
.likeProductDescribe {
  padding: 10px 10px 0px 10px;
}
.likeProductDescribe > p {
  width: 192px;
  height: 65px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #000000;
  font-size: 26px;
  text-align: left;
  font-weight: normal;
  line-height: 32px;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-bottom: 28px;
  -webkit-box-orient: vertical;
}
.likeProductDescribe > i {
  color: red;
  font-size: 15px;
}
.likeProductDescribe > span {
  color: red;
  font-size: 22px;
}
/* <!-- 闲置卖钱 --> */
/*  */
.patPatNavigation {
  width: 100%;
  height: 652px;
  background: url(./../../static/img/patPat/navigation.png) no-repeat;
  background-size: contain;
  margin-top: 10px;
}
.patPatExclusive {
  background: url(./../../static/img/patPat/exclusive.png);
  background-size: contain;
  width: 100%;
  height: 768px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 145px;
  padding-bottom: 28px;
  justify-content: center;
}
.patPatExclusive>a{
  width: 346px;
  height: 294px;
  margin: 8px;
}
.patPatBrilliantList{
  background: #f1f1f1;
}

.patPatRecommend{
  overflow: hidden;
  display: flex;
}
</style>
