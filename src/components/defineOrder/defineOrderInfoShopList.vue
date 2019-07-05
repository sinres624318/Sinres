<template>
    <div class="define-order-info-shop-list">
      <div class="define-order-info-shop-list-item" v-for="(item,index) in sendDefineOrder.product">
        <div class="define-order-info-shop-name">
          <div class="define-order-info-shop-logo">
            <img :src="item.shopLogo" alt="">
          </div>
          <span>{{item.productShop}}</span>
        </div>
        <DefineOrderInfoShopProduct :sendDefineOrderShopProduct="sendDefineOrder.product"/>
      </div>

    </div>
</template>

<script>
  import DefineOrderInfoShopProduct from './defineOrderInfoShopProduct'
  export default {
        name: "defineOrderInfoShopList",
    components:{
      DefineOrderInfoShopProduct
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
