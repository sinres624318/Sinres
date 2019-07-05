<template>
    <div class="define-order-total-price">
      <p>总价：</p>
      <span>￥{{sendDefineOrder.product[0].productList[0].price}}</span>
    </div>
</template>

<script>
    export default {
        name: "defineOrderTotalPrice",
        props:{
          sendDefineOrder:{
            type:Object,
            required:true
          }
        }
    }
</script>

<style scoped>

</style>
