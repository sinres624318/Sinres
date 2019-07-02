<template>
  <div class="cart-shop">
    <CartShopTitle
      v-if="shop"
      :sID="sID"
      :shopCheck="shop.checked"
      :title="shop.shopName"></CartShopTitle>
    <div class="product-List" v-if="shop">
      <CartShopProduct
        v-for="(item,index) in shop.productList"
        :pID="index"
        :sID="sID"
        :product="item"
        :key="index"></CartShopProduct>
    </div>
  </div>
</template>

<script>
  import CartShopProduct from './../cart/cartShopProduct'
  import CartShopTitle from './../cart/cartShopTitle'

  export default {
    name: "cartShop",
    components: {
      CartShopProduct,
      CartShopTitle
    },
    props: {
      shop: {
        type: Object,
        required: true
      },
      sID: {
        type: Number,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
