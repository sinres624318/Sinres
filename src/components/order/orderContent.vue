<template>
  <div class="order-content">
    <OrderProductInfo></OrderProductInfo>
    <OrderProductInfo></OrderProductInfo>
    <div class="order-pay-price-wrap">
      <div class="order-pay-num">共1件商品</div>
      <div class="order-pay-price">
        <span class="order-pay-price-text">实付金额：</span>
        <span class="order-pay-price-count">&yen4499.00</span>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderProductInfo from './orderProductInfo'
  export default {
    name: "orderContent",
    components:{
      OrderProductInfo
    }
  }
</script>

<style scoped>

</style>
