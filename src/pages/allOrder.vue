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
    <OrderItem v-if="orderData.length>0" v-for="(item,index) in orderData" :order="item" :key="index"></OrderItem>
  </div>
</template>

<script>
  import NavBar from '../components/common/navBar'
  import OrderType from '../components/order/orderType'
  import OrderItem from '../components/order/orderItem'
  import {goBack} from './../assets/js/common'

  export default {
    name: "mineAllOrder",
    data() {
      return {
        orderData: []
      }
    },
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
      this.axios.post("http://10.35.161.65:9005/mine/order/", {
        "token": 123456
      })
        .then((response) => {
          let data = response.data;
          if (data.code === 200) {
            console.log(data);
            this.orderData = data.order_list;
          }
        })
        .catch((error) => {
          console.log(error);
        })
    },
  }
</script>

<style src="../../static/css/allOrder.css"></style>
