<template>
    <div class="define-order-info">
      <DefineOrderInfoShopList :sendDefineOrders="sendDefineOrder"/>
      <DefineOrderDistributionServer/>
      <DefineOrderBeans/>
      <DefineOrderPrice :sendDefineOrders="sendDefineOrder"/>
      <DefineOrderTotalPrice :sendDefineOrders="sendDefineOrder"/>
      <DefineOrderSubmit :sendTel="sendTel" :sendDefineOrders="sendDefineOrder" :sendproductlist="sendproductlist"/>
    </div>
</template>

<script>
  import DefineOrderDistributionServer from './defineOrderDistributionServer'
  import DefineOrderBeans from './defineOrderBeans'
  import DefineOrderPrice from './defineOrderPrice'
  import DefineOrderTotalPrice from './defineOrderTotalPrice'
  import DefineOrderSubmit from './defineOrderSubmit'
  import DefineOrderInfoShopList from './defineOrderInfoShopList'
    export default {
        name: "defineOrderInfo",
        components:{
          DefineOrderDistributionServer,
          DefineOrderBeans,
          DefineOrderPrice,
          DefineOrderTotalPrice,
          DefineOrderSubmit,
          DefineOrderInfoShopList
        },
      props:{
        sendDefineOrder:{
          type:Object,
          required:true
        },
        sendproductlist:{
          type: Array,
          required: true
        },
        sendTel:{
          type:String,
          required:true
        }
      },
      mounted() {
          console.log(this.sendDefineOrder);
      }
    }
</script>

<style scoped>

</style>
