<template>
    <div class="define-order-info">
      <div class="define-order-info-shop-name">
        <div class="define-order-info-shop-logo">
          <img src="./../../../static/img/defineOrder/shopLogo-01.png" alt="">
        </div>
        <span>新锐自营</span>
      </div>
      <DefineOrderInfoShopProduct/>
      <DefineOrderDistributionServer/>
      <DefineOrderBeans/>
      <DefineOrderPrice/>
      <DefineOrderTotalPrice/>
      <DefineOrderSubmit/>
    </div>
</template>

<script>
  import DefineOrderInfoShopProduct from './defineOrderInfoShopProduct'
  import DefineOrderDistributionServer from './defineOrderDistributionServer'
  import DefineOrderBeans from './defineOrderBeans'
  import DefineOrderPrice from './defineOrderPrice'
  import DefineOrderTotalPrice from './defineOrderTotalPrice'
  import DefineOrderSubmit from './defineOrderSubmit'
    export default {
        name: "defineOrderInfo",
        components:{
          DefineOrderInfoShopProduct,
          DefineOrderDistributionServer,
          DefineOrderBeans,
          DefineOrderPrice,
          DefineOrderTotalPrice,
          DefineOrderSubmit
        }
    }
</script>

<style scoped>

</style>
