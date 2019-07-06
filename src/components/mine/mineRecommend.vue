<template>
  <div class="mine-recommend">
    <div class="service">客户服务</div>
    <div class="recommend">
      <div id="cnxhTitle" class="recomm-mod-title"><span class="recomm-mod-title-text">为您推荐</span></div>
    </div>
    <RecommendedProduct :recommendedProduct="{product_list:recommendedProduct}"></RecommendedProduct>
  </div>
</template>

<script>
  import RecommendedProduct from './../common/recommendedProduct'

  export default {
    name: "mineRecommend",
    components: {
      RecommendedProduct
    },
    props: {
      recommendedProduct: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
