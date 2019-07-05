<template>
    <div class="pay-submit" @click="letShow()">
      <span>微信支付</span>
      <i>￥{{totalMoney}}</i>
    </div>
</template>

<script>
    export default {
        name: "paySubmit",
      methods:{
        letShow(){
          this.$emit("receive",true)
        }
      },
      props:{
        totalMoney:{
          type:Number,
          required:true
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
