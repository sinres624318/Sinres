<template>
    <div class="define-order-info-shop-list">
      <div class="define-order-info-shop-list-item" v-for="(item,index) in sendDefineOrders.goodslist">
        <div class="define-order-info-shop-name">

          <span>{{item.shopname}}</span>
        </div>
        <DefineOrderInfoShopProduct :sendDefineOrderShopProduct="sendDefineOrders.goodslist"/>
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
      sendDefineOrders:{
        type:Object,
        required:true
      }
    },
    created() {
    }
  }
</script>

<style scoped>

</style>
