<template>
  <div class="shippingAddress-fist">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">收货地址</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" ></div>
      </template>
    </NavBar>
    <ShippingAddressCenter></ShippingAddressCenter>
    <ShippingAddressFoot></ShippingAddressFoot>
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
  import NavBar from '../../components/common/navBar'
  import ShippingAddressCenter from '../../components/shippingAddress/shippingAddressCenter'
  import ShippingAddressFoot from '../../components/shippingAddress/shippingAddressFoot'
  export default {
    name: "shippingAddress",
    data(){
      return{
        shippingAddressInfo:{},
      }
    },
    components:{
      NavBar,
      ShippingAddressCenter,
      ShippingAddressFoot
    },
    methods: {
      backClickHandle() {
        goBack(this.$router)
      },
    },
    created() {
      this.axios.get("https://www.easy-mock.com/mock/5d184b100c3e0f555a5ba35c/example/shippingAddress")
        .then((data)=>{
          this.shippingAddressInfo=data.data
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/shippingAddress/shippingAddress.css"></style>
<style scoped>

</style>
