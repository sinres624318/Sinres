<template>
    <div class="define-order-info">
      <DefineOrderInfoShopList :sendDefineOrder="sendDefineOrder"/>
      <DefineOrderDistributionServer/>
      <DefineOrderBeans/>
      <DefineOrderPrice :sendDefineOrder="sendDefineOrder"/>
      <DefineOrderTotalPrice :sendDefineOrder="sendDefineOrder"/>
      <DefineOrderSubmit/>
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
        }
      }
    }
</script>

<style scoped>

</style>
