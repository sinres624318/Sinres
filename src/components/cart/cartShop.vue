<template>
  <div class="shop">
    <CartShopTitle></CartShopTitle>
    <div class="product-List">
      <CartShopProduct></CartShopProduct>
      <CartShopProduct></CartShopProduct>
    </div>
  </div>
</template>

<script>
  import CartShopProduct from './../cart/cartShopProduct'
  import CartShopTitle from './../cart/cartShopTitle'
  export default {
    name: "cartShop",
    components:{
      CartShopProduct,
      CartShopTitle
    }
  }
</script>

<style scoped>

</style>
