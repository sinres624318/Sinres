<template>
    <div class="define-order-total-price">
      <p>总价：</p>
      <span>￥{{sendDefineOrders.total}}</span>
    </div>
</template>

<script>
    export default {
        name: "defineOrderTotalPrice",
        props:{
          sendDefineOrders:{
            type:Object,
            required:true
          }
        }
    }
</script>

<style scoped>

</style>
