<template>
  <div class="shop">
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
        <p>京东自营</p>
      </div>
      <div class="shopHeaderCollect">
        <div>收藏</div>
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
        <img src="../../../static/img/guanzhu.png" alt>
      </a>
    </div>
    <!-- 精品推荐 -->
    <div class="jingpin">
      <a href>
        <img src="../../../static/img/jingpin.png" alt>
      </a>
    </div>

    <div class="productModel">
      <img src="../../../static/img/shop_content1.png" alt>
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
      <div class="shopListItem">
        <a href="#">
          <img src="../../../static/img/shop_list_item_pic.png">
          <div class="shopListItemBottom">
            <p>联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD</p>
            <div class="pic">
              <em>￥</em>
              <span>5999</span>
            </div>
            <div class="evaluate">
              <div class="evalute_left">
                <span>7777</span>评价
                <span>78%</span>好评
              </div>
              <div class="evalute_right">
                <a href>
                  <img src="../../../static/img/shop_list_item_toCart.png" alt>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="shopListItem">
        <a href="#">
          <img src="../../../static/img/shop_list_item_pic.png">
          <div class="shopListItemBottom">
            <p>联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD</p>
            <div class="pic">
              <em>￥</em>
              <span>5999</span>
            </div>
            <div class="evaluate">
              <div class="evalute_left">
                <span>7777</span>评价
                <span>78%</span>好评
              </div>
              <div class="evalute_right">
                <a href>
                  <img src="../../../static/img/shop_list_item_toCart.png" alt>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { Search } from "vant";
import { Swipe, SwipeItem ,Lazyload } from "vant";
export default {
  name: "shopIndex",
  components: {
    "van-search": Search,
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    Lazyload
  },
  data() {
    return {
      banner: [
        "//img13.360buyimg.com/cms/jfs/t1/62295/28/2455/474652/5d0c40fbEdb8017cc/4320c0cb6753cc4a.jpg!q70.dpg.webp",
        "//img10.360buyimg.com/cms/jfs/t1/67085/12/2502/148486/5d0c934dE82024784/d57d816fbb737888.jpg!q70.dpg.webp"
      ]
    };
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
  background: linear-gradient(to bottom,rgba(0,0,0,.4) 40%,rgba(0,0,0,.2) 70%,#ffffff 90%);
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
/* shopNav */
.shopNav {
  height: 60px;
  padding: 0 20px;
  display: flex;
}
.shopNavInput {
  width: 165px;
  height: 60px;
}
.shopNavInput .van-search {
  border-radius: 30px;
  font-size: 26px;
  width: 100%;
}
.shopNavInput .van-search__content {
  background: #fff;
}
.shopNavInput .van-field__left-icon .van-icon {
  font-size: 26px;
}
.shopNavInput .van-cell {
  font-size: 26px;
}
.shopNavList {
  display: flex;
  color: #fff;
  font-weight: 600;
  font-size: 28px;
  margin-left: 60px;
}
.shopNavList > div {
  line-height: 60px;
  margin-right: 60px;
}
.shopNavList > div:hover {
  border-bottom: 2px solid #fff;
}
/* shopSwipter */
.shopSwipter .van-swipe {
  height: 850px;
  width: 710px;
  margin: 0 auto;
}
.shopSwipter .van-swipe img{
  border-radius: 10px;
}
/* 关注领券 */
.guanzhu,
.jingpin,
.productModel {
  padding: 0 20px;
}

/* -------------productModelLink ----- */
.productModel {
  position: relative;
}
.productModelLink {
  padding: 0 20px;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0 auto;
}
.productModelFirst{
    display: flex;
  justify-content: center;
  align-items: center;
}
.productModelChild{
  margin-top: 40px;
    display: flex;
  justify-content: center;
  align-items: center;
}
.productModel .productModelChild > a {
  width: 124px;
  height: 102px;
  display: inline-block;
}
.productModel .productModelFirst > a {
  width: 648px;
  display: inline-block;
  height: 268px;
}

/* shopList */
.shopList {
  padding: 0 20px;
  display: flex;
}
.shopListItem {
  width: 50%;
  border-bottom: 8px solid rgb(243, 244, 247);
  border-right: 8px solid rgb(243, 244, 247);
}
.shopListItemBottom {
  padding: 10px;
}
.shopListItem p {
  font-size: 24px;
  line-height: 30px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}
.shopListItem > a > img {
  width: 352px;
  height: 376px;
}
.pic {
  font-size: 24px;
  color: #f02b16;
  margin-top: 15px;
}
.evaluate {
  display: flex;
  justify-content: space-between;
}
.evalute_left {
  display: flex;
  align-items: center;
}
.evalute_right {
  width: 50px;
  height: 50px;
}
</style>


