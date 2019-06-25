<template>
  <div class="mine-cell">
    <div class="rel-container"  id="mineOrder">
      <div class="mine-order-entrance type-unpay">
        <i></i>
        <span>代付款</span>
      </div>
      <div class="mine-order-entrance type-unrecieve">
        <i></i>
        <span>待收货</span>
      </div>
      <div class="mine-order-entrance type-consult">
        <i></i>
        <span>退货/换货</span>
      </div>
      <div class="mine-order-entrance type-orders">
        <i></i>
        <span>全部订单</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mineOrderCell"
    }
</script>

<style scoped>

</style>
