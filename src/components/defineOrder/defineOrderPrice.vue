<template>
  <div class="define-order-price" v-if="sendDefineOrders">
    <div class="define-order-product-price">
      <h3>商品金额</h3>
      <i>￥{{sendDefineOrders.total}}.00</i>
    </div>
    <div class="define-order-product-cost">
      <h3>运费<span>(总重：0.600kg)</span></h3>
      <i>+￥0.00</i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "defineOrderPrice",
    props: {
      sendDefineOrders: {
        type: Object,
        required: true
      }
    },
    created() {
      console.log(this.sendDefineOrders.total);
    }
  }
</script>

<style scoped>

</style>
