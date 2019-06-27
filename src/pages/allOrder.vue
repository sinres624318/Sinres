<template>
  <div class="all-order">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">我的订单</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" @click="moreMenuClickHandle">&#xe670;</div>
      </template>
    </NavBar>
    <OrderType></OrderType>
    <OrderItem></OrderItem>
  </div>
</template>

<script>
  import NavBar from '../components/common/navBar'
  import OrderType from '../components/order/orderType'
  import OrderItem from '../components/order/orderItem'
  export default {
    name: "mineAllOrder",
    components:{
      NavBar,
      OrderItem,
      OrderType
    },
    methods: {
      backClickHandle() {
        this.$router.go(-1);
      },
      moreMenuClickHandle() {
        this.flag = !this.flag;
      }
    }
  }
</script>

<style src="../../static/css/allOrder.css"></style>
