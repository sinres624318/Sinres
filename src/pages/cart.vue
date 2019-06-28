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
    <CartProductEdit v-if="cartInfo.cartShopList" @changeProductHandle="changeProductHandle"></CartProductEdit>
    <Loading v-if="!cartInfo.cartShopList"></Loading>
    <CartShop v-if="cartInfo.cartShopList" v-for="(shop,index) in cartInfo.cartShopList" :key="index"
              :shop="shop"></CartShop>
    <CartTotalPrice v-if="flag &&cartInfo.cartShopList"></CartTotalPrice>
    <CartProductEditBar v-if="!flag"></CartProductEditBar>
  </div>
</template>

<script>
  import NavBar from './../components/common/navBar'
  import CartShop from './../components/cart/cartShop'
  import CartTotalPrice from './../components/cart/cartTotalPrice'
  import CartProductEdit from './../components/cart/cartProductEdit'
  import CartProductEditBar from './../components/cart/cartProductEditBar'
  import Loading from '../components/common/loading'
  import {goBack} from './../assets/js/common'

  export default {
    name: "cart",
    components: {
      NavBar,
      CartShop,
      CartTotalPrice,
      CartProductEdit,
      CartProductEditBar,
      Loading
    },
    data() {
      return {
        flag: true,
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
      this.$store.dispatch('getCartInfo');

    },
    computed: {
      cartInfo() {
        return this.$store.state.cartInfo
      }
    }
  }
</script>
<style src="./../../static/css/cart/cart.css"></style>
