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
  import {goBack} from './../assets/js/common'

  export default {
    name: "mineAllOrder",
    components: {
      NavBar,
      OrderItem,
      OrderType
    },
    methods: {
      backClickHandle() {
        goBack(this.$router)
      },
      moreMenuClickHandle() {
        this.flag = !this.flag;
      }
    },
    created() {
      this.axios.post("http://10.35.162.3:9005/mine/order/", {
        "token": 123456
      })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    mounted() {
      console.log(this.$router);
    },
  }
</script>

<style src="../../static/css/allOrder.css"></style>
