<template>
  <div class="cart">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="onClickLeft">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">购物车</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
    <CartProductEdit
      v-if="cartInfo.cartShopList"
      @changeProductHandle="changeProductHandle"></CartProductEdit>
    <Loading v-if="!cartInfo.cartShopList"></Loading>
    <div class="empty-cart-wrap" v-if="emptyFlag">
      <div class="empty-cart-img">
        <img src="./../.././static/img/cart/emptyCart.png" alt="">
      </div>
      <div class="empty-cart-text">购物车空空如也，再转转吧~</div>
    </div>
    <CartShop
      v-if="cartInfo.cartShopList"
      v-for="(shop,index) in cartInfo.cartShopList"
      :key="index"
      :sID="index"
      :shop="shop"></CartShop>
    <recommendedProduct :recommendedProduct="{product_list:cartInfo.ProuductList}"></recommendedProduct>
    <CartTotalPrice
      :totalPrice="totalPrice"
      :productNum="productNum"
      :allCheck="cartInfo.checked"
      v-if="flag &&cartInfo.cartShopList"></CartTotalPrice>
    <CartProductEditBar
      :allCheck="cartInfo.checked"
      v-if="!flag"></CartProductEditBar>
  </div>
</template>

<script>
  import NavBar from './../components/common/navBar'
  import CartShop from './../components/cart/cartShop'
  import CartTotalPrice from './../components/cart/cartTotalPrice'
  import CartProductEdit from './../components/cart/cartProductEdit'
  import CartProductEditBar from './../components/cart/cartProductEditBar'
  import recommendedProduct from './../components/common/recommendedProduct'
  import Loading from '../components/common/loading'
  import {
    goBack,
    getCookie
  } from './../assets/js/common'

  export default {
    name: "cart",
    components: {
      NavBar,
      CartShop,
      CartTotalPrice,
      CartProductEdit,
      CartProductEditBar,
      recommendedProduct,
      Loading
    },
    data() {
      return {
        flag: true,
        emptyFlag: false
      }
    },
    methods: {
      onClickLeft() {
        goBack(this.$router)
      },
      changeProductHandle() {
        this.flag = !this.flag
      }
    },
    created() {
      this.$store.dispatch('getCartInfo', {token: getCookie('token'), vue: this});
    },
    computed: {
      cartInfo() {
        return this.$store.state.cartInfo
      },
      totalPrice() {
        return this.$store.state.cartTotalPrice
      },
      productNum() {
        return this.$store.state.cartProductNum
      }
    },
    beforeUpdate() {
      this.emptyFlag = this.cartInfo.cartShopList.length > 0 ? false : true
    }
  }
</script>
<style src="./../../static/css/cart/cart.css"></style>
