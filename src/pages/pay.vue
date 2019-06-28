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
    <PaySubmit @receive="letShadowShow"></PaySubmit>
    <PayShadow v-if="show" @handleHide="funHide"></PayShadow>
  </div>

</template>

<script>
  import NavBar from './../components/common/navBar'
  import PayNeedPay from './../components/pay/payNeedPay'
  import PayOtherPay from './../components/pay/payOtherPay'
  import PayOtherPayItem from './../components/pay/payOtherPayItem'
  import PaySubmit from './../components/pay/paySubmit'
  import PayShadow from './../components/pay/payShadow'
    export default {
        name: "pay",
        components:{
          NavBar,
          PayNeedPay,
          PayOtherPay,
          PayOtherPayItem,
          PaySubmit,
          PayShadow
        },
      data(){
          return{
            show:false
          }
      },
      methods:{
        letShadowShow(val){
          this.show = val
        },
        funHide(val){
          this.show = val
        }
      }
    }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/pay.css"></style>
<style scoped>

</style>
