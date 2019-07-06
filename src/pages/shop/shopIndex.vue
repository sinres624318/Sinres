<template>
  <div>
    <div class="shopIndex" v-if="shopProductInfo">
      <ShopHeader :shopProductInfo="shopProductInfo" v-if="shopProductInfo"></ShopHeader>
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
      <div class="productModel" v-for="(item,index) in shopProductInfo.productModel" :key="index">
        <img :src='item' alt>
        <div class="productModelLink">
          <div class="productModelFirst">
            <a herf="javascript:;"
               @click="detailsClickHandle(0)"
               href="#"></a>
          </div>
          <div class="productModelChild">
            <a herf="javascript:;"
               @click="detailsClickHandle(1)"
               href="#"></a>
            <a herf="javascript:;"
               @click="detailsClickHandle(2)"
               href="#"></a>
            <a herf="javascript:;"
               @click="detailsClickHandle(3)"
               href="#"></a>
            <a herf="javascript:;"
               @click="detailsClickHandle(4)"
               href="#"></a>
          </div>
        </div>
      </div>

      <!-- shopList -->
      <div class="shopList">
        <ShopProductV v-if="flag" :shopProductInfo="shopProductInfo.roductList"></ShopProductV>
      </div>
    </div>
    <Loading v-if="!shopProductInfo"></Loading>
  </div>
</template>
<script>
  import {Search} from "vant";
  import {Swipe, SwipeItem, Lazyload} from "vant";
  import ShopHeader from './../../components/shop/shopHeader';
  import ShopProductV from './../../components/shop/shopProductV';
  import Loading from './../../components/common/loading'
  import {shop} from './../../api/url';
  export default {
    name: "shopIndex",
    components: {
      "van-search": Search,
      "van-swipe": Swipe,
      "van-swipe-item": SwipeItem,
      Lazyload,
      ShopProductV,
      Loading,
      ShopHeader
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
    props: {
      shopId: {
        type: String,
        required: true
      }
    },
    created(){
      // let shopId=this.$route.params.shopId;
      this.axios.get("shop"+"shopIndex/"+this.shopId).then((data) => {
        this.shopProductInfo = data.data;
        console.log(this.shopProductInfo)
      }).catch((err) => {
        console.log(err)
      })
    },
  }

</script>
<style src='./../../../static/css/reset.css'></style>

<style src='./../../../static/css/shop/shopIndex.css'></style>



