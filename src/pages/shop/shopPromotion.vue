<template>
  <div class="promotion">
    <shopHeader></shopHeader>
    <div class="promotionList">
      <p>以下商品参加限时秒杀，欢迎选购</p>
      <div class="promotionLists">
        <productPromotion></productPromotion>
      </div>
      
    </div>
  </div>
</template>
<script>
import shopHeader from "./../../components/shop/shopHeader";
import productPromotion from "./../../components/shop/productPromotion";
export default {
  name: "shopPromotion",
  components: {
    shopHeader,
    productPromotion
  }
};
</script>
<style scoped>
.shop {
  overflow-y: auto;
  height: 100%;
  background-size: 100%;
}

/* promotionList-------------- */
.promotionList {
  background: #f7f7f7;  
  padding: 10px 20px 30px;


}
.promotionList > p {
  height: 60px;
  background: #f7f7f7;
  text-align: center;
  font-size: 24px;
  color: #9a9a9a;
  line-height: 60px;
}
.promotionLists{
  border-radius: 16px;
  background: #fff;
}
</style>
