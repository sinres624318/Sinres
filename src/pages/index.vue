<template>
  <div class="index">
    <indexHender></indexHender>
    <div class="main">
      <indexTopBanner></indexTopBanner>
      <indexCenterBanner></indexCenterBanner>
      <indexSeckill></indexSeckill>
      <indexThree></indexThree>
      <indexFour></indexFour>
      <indexRecommend></indexRecommend>
    </div>
    <toolsBar></toolsBar>
  </div>
</template>

<script>
  import indexHender from "../components/index/indexHender"
  import indexTopBanner from "../components/index/indexTopBanner"
  import indexCenterBanner from "../components/index/indexCenterBanner"
  import indexSeckill from "../components/index/indexSeckill"
  import indexThree from "../components/index/indexThree"
  import toolsBar from "../components/common/toolsBar"
  import indexFour from "../components/index/indexFour"
  import indexRecommend from "../components/index/indexRecommend"
    export default {
        name: "index",
        components:{
          indexHender,
          indexTopBanner,
          indexCenterBanner,
          indexSeckill,
          indexThree,
          toolsBar,
          indexFour,
          indexRecommend
        }
    }
</script>

<style  src="../../static/font/iconfont.css"></style>
<style  src="../../static/css/index/index.css"></style>
<style scoped>
</style>
