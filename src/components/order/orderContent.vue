<template>
  <div class="order-content">
    <OrderProductInfo v-for="(item,index) in orderContent.orderProductList" :product="item" :key="index"></OrderProductInfo>
    <div class="order-pay-price-wrap">
      <div class="order-pay-num">共1件商品</div>
      <div class="order-pay-price">
        <span class="order-pay-price-text">实付金额：</span>
        <span class="order-pay-price-count">&yen;{{orderContent.orderasset}}</span>
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
    },
    props:{
      orderContent:{
        type:Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
