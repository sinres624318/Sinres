<template>
  <div class="pay">
    <NavBar>
      <template v-slot:left>
        <router-link class="left iconfont" to="/vouchers" tag="div">&#xe61c;</router-link>
      </template>
      <template v-slot:title>
        <div class="title">信锐收银台</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
    <PayNeedPay/>
    <PayOtherPay/>
    <PayOtherPayItem/>
    <PaySubmit/>
  </div>

</template>

<script>
  import NavBar from './../components/common/navBar'
  import PayNeedPay from './../components/pay/payNeedPay'
  import PayOtherPay from './../components/pay/payOtherPay'
  import PayOtherPayItem from './../components/pay/payOtherPayItem'
  import PaySubmit from './../components/pay/paySubmit'
    export default {
        name: "pay",
        components:{
          NavBar,
          PayNeedPay,
          PayOtherPay,
          PayOtherPayItem,
          PaySubmit
        }
    }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/pay.css"></style>
<style scoped>

</style>
