<template>
  <div class="order-button">
    <button v-if="orderContent.orderstatus==2" class="order-comment-button">看相似</button>
    <button v-if="orderContent.orderstatus==2" class="order-againBuy-button">再次购买</button>
    <button v-if="orderContent.orderstatus==1||orderContent.orderstatus==0" class="order-cancel-button">取消订单</button>
    <button v-if="orderContent.orderstatus==0" class="order-goPay-button">去支付</button>
  </div>
</template>

<script>
  export default {
    name: "orderButton",
    props:{
      orderContent:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
