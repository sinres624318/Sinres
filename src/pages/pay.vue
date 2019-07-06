<template>
  <div class="pay">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">信锐收银台</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
    <PayNeedPay :totalMoney="money"/>
    <PayOtherPay/>
    <PayOtherPayItem/>
    <PaySubmit @receive="letShadowShow" :totalMoney="money"></PaySubmit>
    <PayShadow v-if="show" @handleHide="funHide"></PayShadow>
    <PayPassword v-if="pwdShow" @sendfalse="handleReceivePwd" :sendMoney="money"/>
  </div>

</template>

<script>
  import NavBar from './../components/common/navBar'
  import PayNeedPay from './../components/pay/payNeedPay'
  import PayOtherPay from './../components/pay/payOtherPay'
  import PayOtherPayItem from './../components/pay/payOtherPayItem'
  import PaySubmit from './../components/pay/paySubmit'
  import PayShadow from './../components/pay/payShadow'
  import {goBack} from './../assets/js/common.js'
  import PayPassword from './../components/pay/payPassword'

  export default {
    name: "pay",
    components: {
      NavBar,
      PayNeedPay,
      PayOtherPay,
      PayOtherPayItem,
      PaySubmit,
      PayShadow,
      PayPassword
    },
    data() {
      return {
        show: false,
        pwdShow:false,
        money:""
      }
    },
    methods: {
      letShadowShow(val) {
        console.log(val);
        this.pwdShow = val
      },
      funHide(val) {
        this.show = val
      },
      backClickHandle() {
        this.show = true
      },
      handleReceivePwd(val){
        this.pwdShow = val
      }
    },
    created() {
      this.money = this.$route.params.totalPrice
    }
  }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/pay.css"></style>
<style scoped>

</style>
