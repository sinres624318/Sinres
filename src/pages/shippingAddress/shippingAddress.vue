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
    <ShippingAddressFooter></ShippingAddressFooter>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navBar'
  import ShippingAddressFooter from '../../components/shippingAddress/shippingAddressFooter'
    export default {
        name: "shippingAddress",
      components:{
        NavBar,
        ShippingAddressFooter,
      },
      methods: {
        backClickHandle() {
          this.$router.go(-1);
        },
      }
    }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/shippingAddress/shippingAddress.css"></style>
<style scoped>

</style>
