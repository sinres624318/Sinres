<template>
  <div class="order-title">
    <div class="order-title-icon iconfont">&#xe650;</div>
    <div class="order-title-content">{{orderTitle.shopname}}</div>
    <div v-if="orderTitle.orderstatus==0" class="order-state">待付款</div>
    <div v-if="orderTitle.orderstatus==1" class="order-state">待收货</div>
    <div v-if="orderTitle.orderstatus==2" class="order-state">已完成</div>
    <div class="order-delete iconfont">&#xe61b;</div>
  </div>
</template>

<script>
  export default {
    name: "orderTitle",
    data() {
      return {
        status: ''
      }
    },
    props: {
      orderTitle: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
