<template>
  <div class="product-list-product">
    <router-link
      tag="div"
      :to="{name:'Details'}"
      class="product-item">
      <div class="product-item-img">
        <img src="../../../static/img/products/vivo_IQOO.jpg" alt="">
      </div>
      <div class="product-item-info">
        <div class="info-title">
          <span style="-webkit-box-orient: vertical;">vivo iQOOvivo iQOOvivo iQOOvivo iQOOvivo iQOOvivo iQOOvivivo iQOO</span>
        </div>
        <!--<div class="info-index">
          <span>骁龙855</span>
          <span>超快闪充</span>
          <span>电竞游戏</span>
        </div>-->
        <div class="info-price">
          <strong>
            <i>&yen;</i>
            <span>3298</span>
            <i>.00</i>
          </strong>
        </div>
        <div class="info-attr">
          <span>15万+条评论</span>
          <span>好评率95%</span>
        </div>
        <div class="info-shop">
          <span class="shop-name">vivo京东自营官方旗舰店</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "productListProduct"
  }
</script>

<style scoped>

</style>
