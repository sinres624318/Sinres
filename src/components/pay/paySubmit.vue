<template>
    <div class="pay-submit" @click="letShow()">
      <span>微信支付</span>
      <i>￥4499.00</i>
    </div>
</template>

<script>
    export default {
        name: "paySubmit",
      methods:{
        letShow(){
          this.$emit("receive",true)
        }
      }
    }
</script>

<style scoped>

</style>
