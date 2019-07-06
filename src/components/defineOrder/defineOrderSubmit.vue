<template>
  <div class="define-order-submit">
    <input class="define-order-submit-btn" type="button" value="在线支付" @click="reqHandleInfo(sendDefineOrders)">
  </div>
</template>

<script>
  import {getCookie} from './../../assets/js/common';

  export default {
    name: "defineOrderSubmit",
    data() {
      return {
        submitInfo: {}
      }
    },
    methods: {
      reqHandleInfo(sendDefineOrders) {
        this.$router.push({
          name: 'Pay', params: {
            totalPrice: this.sendDefineOrders.total,
            productList: this.sendproductlist,
            address: this.sendDefineOrders.address,
          }
        })
      }
    },
    props: {
      sendDefineOrders: {
        type: Object,
        required: true
      },
      sendproductlist: {
        type: Array,
        required: true
      }
    },
    mounted() {
      console.log(this.sendproductlist)
    },
  }
</script>

<style scoped>

</style>
