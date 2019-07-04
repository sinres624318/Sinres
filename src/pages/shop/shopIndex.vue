<template>
  <div>
    <div class="shopIndex" v-if="shopProductInfo">
      <!-- shop-header -->
      <!-- 背景蒙版 -->
      <div class="bgimg">
        <img v-if="this.shopProductInfo.header.img" :src='shopProductInfo.header.img' alt>
        <p></p></div>
      <div class="shopHeader">
        <div class="shopHeaderLogo">
          <a href>
            <img v-if="this.shopProductInfo.header.img" :src='shopProductInfo.header.img'>
          </a>
        </div>
        <div class="shopHeaderName">
          <h3>{{this.shopProductInfo.header.tit}}</h3>
          <p>信瑞自营</p>
        </div>
        <div class="shopHeaderCollect">
          <a href="#">
            <div>收藏</div>
          </a>
          <span>{{this.shopProductInfo.header.collect}}万人收藏</span>
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
          <van-swipe-item v-for="(item, index) in this.shopProductInfo.banner" :key="index">
            <img v-lazy="item">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 关注领券 -->
      <!-- 精品推荐 -->
      <div class="guanzhu" v-for="(item,index) in this.shopProductInfo.imgs" :key="index">
        <a href>
          <img v-if="item" :src="item" alt>
        </a>
      </div>
      <div class="productModel" v-for="aa in shopProductInfo.productModel">
        <img :src='aa.img' alt>
        <div class="productModelLink" >
          <div class="productModelFirst">
            <a herf="javascript:;"
               @click="detailsClickHandle(1)"
               href="#"></a>
          </div>
          <div class="productModelChild">
            <a herf="javascript:;"
               @click="detailsClickHandle(2)"
               href="#"></a>
            <a herf="javascript:;"
               @click="detailsClickHandle(3)"
               href="#"></a>
            <a herf="javascript:;"
               @click="detailsClickHandle(4)"
               href="#"></a>
            <a herf="javascript:;"
               @click="detailsClickHandle(5)"
               href="#"></a>
          </div>
        </div>
      </div>

      <!-- shopList -->
      <div class="shopList">
        <ShopProductV v-if="flag" :shopProductInfoHandle="shopProductInfo.roductList"></ShopProductV>
      </div>
    </div>
    <Loading v-if="!shopProductInfo"></Loading>
  </div>
</template>
<script>
  import {Search} from "vant";
  import {Swipe, SwipeItem, Lazyload} from "vant";
  import ShopProductV from './../../components/shop/shopProductV';
  import Loading from './../../components/common/loading'

  export default {
    name: "shopIndex",
    components: {
      "van-search": Search,
      "van-swipe": Swipe,
      "van-swipe-item": SwipeItem,
      Lazyload,
      ShopProductV,
      Loading
    },
    data() {
      return {
        shopProductInfo: '',
        flag: true

      }
    },
    methods: {
      detailsClickHandle(index) {
        this.$router.push({
          name: 'Details',
          params: {productID: this.shopProductInfo.productModel.productIDList[index]}
        })
        console.log(this.shopProductInfo.productModel.productIDList[index])

      },
    },
    created() {
      this.axios.get("https://www.easy-mock.com/mock/5d031a44641c58517626f2b5/example/shopProductInfo").then((data) => {
        this.shopProductInfo = data.data;
      }).catch((err) => {
        console.log(err)
      })
    }
  }

</script>
<style src='./../../../static/css/reset.css'></style>

<style src='./../../../static/css/shop/shopIndex.css'></style>



