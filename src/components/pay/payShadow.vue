<template>
    <div class="pay-shadow" @click="disappear()">
      <div class="pay-shadow-prompt">
        <h3>确认要离开收银台？</h3>
        <p>您的订单在23小时59分钟内未支付将被取消，请尽快完成支付。</p>
        <div class="pay-or-select">
          <i>继续支付</i>
          <i :class="{orange:show==true}" @click="change()">确认离开</i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "payShadow",
      data(){
        return{
          show:true
        }
      },
      methods:{
        disappear(){
          this.$emit("handleHide",false)
        },
        change(){
          this.show = false
        }
      }
    }
</script>

<style scoped>

</style>
