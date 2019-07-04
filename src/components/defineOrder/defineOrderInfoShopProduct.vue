<template>
    <ul class="define-order-info-shop-product">
      <li v-for="(item,index) in sendDefineOrderShopProduct[0].productList">
        <div class="define-order-info-shop-product-img">
          <img :src="item.img">
        </div>
        <div class="define-order-info-shop-product-title">{{item.title}}</div>
        <p class="define-order-info-shop-product-standard">{{item.standard}}</p>
        <p class="define-order-info-shop-product-price">￥{{item.price}}</p>
        <ul class="define-order-info-shop-product-server">
          <li>
            <div class="define-order-info-shop-product-server-seven-img">
              <img src="./../../../static/img/defineOrder/sevenDay.png" alt="">
            </div>
            <span>支持7天无理由退货（激活后不支持）</span>
          </li>
          <li>
            <div class="define-order-info-shop-product-server-explain-img">
              <img src="./../../../static/img/defineOrder/explain.png" alt="">
            </div>
            <span>价格说明</span>
          </li>
        </ul>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "defineOrderInfoShopProduct",

      props:{
        sendDefineOrderShopProduct:{
          type:Array,
          required:true
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
