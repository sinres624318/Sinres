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
      reqHandleInfo() {
        console.log(this.sendproductlist);
        this.$router.push({
          name: 'Pay', params: {
            productList: this.sendproductlist,
            address: this.sendDefineOrders.address,
            tel:this.sendTel
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
      },
      sendTel:{
        type:String,
        required:true
      }
    },
    mounted() {
      console.log(this.sendDefineOrders);
      console.log(this.sendproductlist);
      console.log(this.sendTel);
    },
  }
</script>

<style scoped>

</style>
