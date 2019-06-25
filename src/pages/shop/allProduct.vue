<template>
  <div class="allProduct">
    <!-- shop-header -->
    <!-- 背景蒙版 -->
    <div class="bgimg">
      <img src="./../../../static/img/shop_background.jpg" alt>
      <p></p>
    </div>
    <div class="shopHeader">
      <div class="shopHeaderLogo">
        <a href>
          <img src="./../../../static/img/shopLogo.png" alt>
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
    <!-- nav-------------- -->
    <div class="allNav">
      <van-tabs v-model="active">
        <van-tab title="默认">
          <div class="allProductList">
            <dvi class="allProductItem">
              <a href="#">
                <div class="productTtemPic">
                  <img src="./../../../static/img/allProductPic410x410.png" alt>
                </div>
                <div class="productItemRight">
                  <p>联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD</p>
                  <div class="pic">
                    <em>￥</em>
                    <span>5999.00</span>
                  </div>
                  <div class="evaluate">
                    <div class="evalute_left">
                      <span>7777</span>评价
                      <span>78%</span>好评
                    </div>
                  </div>
                </div>
              </a>
            </dvi>
            <dvi class="allProductItem">
              <a href="#">
                <div class="productTtemPic">
                  <img src="./../../../static/img/allProductPic410x410.png" alt>
                </div>
                <div class="productItemRight">
                  <p>联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD</p>
                  <div class="pic">
                    <em>￥</em>
                    <span>5999.00</span>
                  </div>
                  <div class="evaluate">
                    <div class="evalute_left">
                      <span>7777</span>评价
                      <span>78%</span>好评
                    </div>
                  </div>
                </div>
              </a>
            </dvi>
          </div>
        </van-tab>
        <van-tab title="销量">内容 2</van-tab>
        <van-tab title="价格">内容 3</van-tab>
        <van-tab title="上新">内容 4</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { Search } from "vant";
import { Tab, Tabs } from "vant";
export default {
  name: "allProduct",
  components: {
    "van-search": Search,
    "van-tab": Tab,
    "van-tabs": Tabs
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
/* nav------------------- */
.allNav{
  margin-top: 16px;
}
.allNav .van-tabs__nav .van-tabs__nav--line{
    height: 200px;
  font-size: 30px;
}
.allNav .van-tabs .van-tab .van-ellipsis{
  font-size: 30px initial
}
.van-tab{
  font-size: 30px;
}
/* allProductItem------ */
.allProductList{
  background: #fff;
}
.allProductItem>a{
  display: flex;
}
.allProductItem .productTtemPic>img{
  width: 240px;
  height: 240px;
}
.allProductItem .productItemRight{
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
}
.allProductItem .productItemRight>p{
  font-size: 28px;
  height: 72px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  color: black;
  -webkit-box-orient: vertical;

}
.allProductItem .productItemRight .pic{
    font-size: 30px;
  color: #f02b16;
  margin-top: 55px;
  font-weight: 600;
}
.allProductItem .productItemRight .evaluate{
  margin-top: 20px;
  font-size: 22px;
}
</style>
