<template>
    <div class="pay-need-pay">
      <h3>需支付:</h3>
      <i>￥{{totalMoney}}</i>
    </div>
</template>

<script>
    export default {
        name: "payNeedPay",
      props:{
        totalMoney:{
          type:Number,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
