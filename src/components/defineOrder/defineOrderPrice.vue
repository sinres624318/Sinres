<template>
    <div class="define-order-price">
      <div class="define-order-product-price">
        <h3>商品金额</h3>
        <i>￥{{sendDefineOrder.product[0].productList[0].price}}.00</i>
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
        props:{
          sendDefineOrder:{
            sendDefineOrder:{
              type:Object,
              required:true
            }
          }
        }
    }
</script>

<style scoped>

</style>
