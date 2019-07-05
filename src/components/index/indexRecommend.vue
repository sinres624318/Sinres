<template>
  <div class="indexRecommend-wrap">
    <div class="recommend-title"></div>
    <recommendedProduct :recommendedProduct="indexRecommend"></recommendedProduct>
  </div>
</template>

<script>
  import recommendedProduct from "../common/recommendedProduct"
    export default {
        name: "indexRecommend",
      components:{
        recommendedProduct,
      },
      props:{
        indexRecommend:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
