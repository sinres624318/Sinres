<template>
  <div class="order-product-info">
    <div class="order-product-img">
      <img :src="product.img" alt="">
    </div>
    <div class="order-product-describe" style="-webkit-box-orient:vertical">{{product.describe}}</div>
    <div class="order-product-single">
      <div class="order-product-single-price">&yen;{{product.productPrice}}</div>
      <div class="order-product-single-num">×{{product.ProductNum}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "orderProductInfo",
    props:{
      product:{
        type:Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
