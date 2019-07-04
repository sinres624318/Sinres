<template>
  <div class="footprint">
  <FootPrintHeader/>
  <FootPrintCompile></FootPrintCompile>
  <RecommendedProduct class="footprint-food"></RecommendedProduct>
  </div>
</template>

<script>
  import FootPrintHeader from '../components/footprint/footprintHeader'
  import FootPrintCompile from '../components/footprint/footprintCompile'
  import FootPrintContent from '../components/footprint/footprintContent'
  import RecommendedProduct from '../components/common/recommendedProduct'
  export default {
        name: "footprint",
    components:{
      FootPrintHeader,
      FootPrintCompile,
      RecommendedProduct
    }
    }
</script>
<style src="../../static/css/footprint.css"></style>
<style scoped>

</style>
