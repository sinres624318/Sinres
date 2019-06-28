<template>
  <div class="indexRecommend-wrap">
    <div class="recommend-title"></div>
    <recommendedProduct></recommendedProduct>
  </div>
</template>

<script>
  import recommendedProduct from "../common/recommendedProduct"
    export default {
        name: "indexRecommend",
      components:{
        recommendedProduct,
      }
    }
</script>

<style scoped>

</style>
