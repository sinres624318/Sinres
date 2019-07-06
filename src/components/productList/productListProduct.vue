<template>
  <div class="product-list-product">
    <router-link
      v-for="(item,index) in productList"
      tag="div"
      :to="{name:'Details'}"
      :key="index"
      class="product-item">
      <div class="product-item-img">
        <img :src="item.img" alt="">
      </div>
      <div class="product-item-info">
        <div class="info-title">
          <span
            style="-webkit-box-orient: vertical;">{{item.goodsdescribe}}</span>
        </div>
        <!--<div class="info-index">
          <span>骁龙855</span>
          <span>超快闪充</span>
          <span>电竞游戏</span>
        </div>-->
        <div class="info-price">
          <strong>
            <i>&yen;</i>
            <span>{{item.price.substring(0,item.price.indexOf('.'))}}</span>
            <i>.{{item.price.substring(item.price.indexOf('.')+1)}}</i>
          </strong>
        </div>
        <div class="info-attr">
          <span>{{item.evaluate}}条评论</span>
          <span>好评率{{item.rateEvaluate}}</span>
        </div>
        <div class="info-shop">
          <span class="shop-name">{{item.shopName}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "productListProduct",
    props: {
      productList: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
