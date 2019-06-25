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
    <CartProductEdit></CartProductEdit>
    <CartShop></CartShop>
    <CartShop></CartShop>
    <CartShop></CartShop>
    <CartShop></CartShop>
    <CartTotalPrice></CartTotalPrice>
  </div>
</template>

<script>
  import NavBar from './../components/common/navBar'
  import CartShop from './../components/cart/cartShop'
  import CartTotalPrice from './../components/cart/cartTotalPrice'
  import CartProductEdit from './../components/cart/cartProductEdit'

  export default {
    name: "cart",
    components: {
      NavBar,
      CartShop,
      CartTotalPrice,
      CartProductEdit
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      }
    }
  }
</script>
<style src="./../../static/css/cart/cart.css"></style>
<style scoped>

</style>
