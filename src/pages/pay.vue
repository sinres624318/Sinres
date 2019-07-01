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
  import {goBack} from './../assets/js/common'
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
        },
        backClickHandle() {
          goBack(this.$router)
        }
      }
    }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/pay.css"></style>
<style scoped>

</style>
