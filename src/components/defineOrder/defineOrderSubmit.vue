<template>
    <div class="define-order-submit">
      <input class="define-order-submit-btn" type="button" value="在线支付" @click="reqHandleInfo(sendDefineOrders)">
    </div>
</template>

<script>
  import {getCookie} from './../../assets/js/common';
  import {defineOrderSubmit} from "./../../api/url";

  export default {
        name: "defineOrderSubmit",
      data(){
        return{
          submitInfo:{}
        }
      },
      methods:{
        reqHandleInfo(sendDefineOrders){
          this.axios.post(defineOrderSubmit,{
            "token":getCookie('token'),
            "goodsList":this.sendproductlist
          }).then((data)=>{
            this.submitInfo = data.data.data

          }).catch((err)=>{
            console.log(err)
          });
          console.log(sendDefineOrders);
          this.$router.push({name:'Pay',params:{totalPrice:sendDefineOrders.total}})
        }
      },
      props:{
        sendDefineOrders:{
          type:Object,
          required:true
        },
        sendproductlist:{
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
