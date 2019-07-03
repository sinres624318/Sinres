<template>
  <div class="patPat">
    <div class="patPatHeader">
      <NavBar>
        <template v-slot:left>
          <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
        </template>
        <template v-slot:title>
          <div class="title">拍拍-二手优品</div>
        </template>
        <template v-slot:right>
          <div class="right iconfont">
            <i class="iconfont" @click="$router.push({path:'/classIfy'})">&#xe684;</i>
            <i class="iconfont" @click="moreMenuClickHandle">&#xe670;</i>
          </div>
        </template>
      </NavBar>
      <MoreMenu v-show="show"></MoreMenu>
    </div>
    <!-- ---------headerEnd-------------- -->
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
      <PatPatLikeIntroduceProduct></PatPatLikeIntroduceProduct>
    </div>
    <!-- 闲置卖钱 -->
    <div class="patPatNavigation"></div>
    <!-- 拍拍专享 -->
    <div class="patPatExclusive">
      <a href="#">
        <img src="./../../static/img/patPat/exclusive1.png" alt>
      </a>
      <a href="#">
        <img src="./../../static/img/patPat/exclusive2.png" alt>
      </a>
      <a href="#">
        <img src="./../../static/img/patPat/exclusive3.png" alt>
      </a>
      <a href="#">
        <img src="./../../static/img/patPat/exclusive4.png" alt>
      </a>
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
    <Loading></Loading>
  </div>
</template>
<script>
import PatPatProduct from "./../components/patPat/patPatProduct";
import PatPatLikeIntroduceProduct from "./../components/patPat/patPatLikeIntroduceProduct";
import { Swipe, SwipeItem, Lazyload } from "vant";
import NavBar from "./../components/common/navBar";
import MoreMenu from "../components/common/moreMenu";
import Loading from "../components/common/loading";

export default {
  name: "patPat",
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    NavBar,
    Lazyload,
    PatPatLikeIntroduceProduct,
    PatPatProduct,
    MoreMenu,
    Loading
  },
  data() {
    return {
      banner: [
        "../../static/img/patPat/pat-banner1.png",
        "../../static/img/patPat/pat-banner2.png"
      ],
      // flag: false
      show:true
    };
  },
  methods: {
    backClickHandle() {
      this.$router.go(-1);
    },
    moreMenuClickHandle() {
      // if(this.show==false){
      //   this.show=true
      // }
      // else if(this.show==true){
      //   this.show=false
      // }
      console.log(1)
    }
  }
};
</script>



<style src="./../../static/css/patPat.css"></style>

<style scoped>


</style>
