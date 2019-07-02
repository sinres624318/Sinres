<template>
  <div class="register-mask">
    <div class="register-mask-content">
      <div class="register-mask-content-top">
        <img src="../../../static/img/Register/1.png">
      </div>
      <div class="register-mask-content-middle">
        <span>我们将发送短信/语音验证码至:</span>
        <span>{{TEL}}</span>
      </div>
      <div class="register-mask-content-bottom">
        <p @click="confirmCancelSendCodeHandle()">取消</p>
        <p @click="confirmSendCodeHandle()" class="register-mask-content-bottom-p">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RegisterMask",
    data() {
      return {}
    },
    props: {
      TEL: {
        type: String,
        required: true
      }
    },
    methods: {
      confirmCancelSendCodeHandle() {
        this.$emit('confirmCancelSendCode', false)
      },
      confirmSendCodeHandle() {
        this.$emit('confirmSendCode', {flag: false, TEL: this.TEL})
      }
    }
  }
</script>

<style scoped>

</style>
