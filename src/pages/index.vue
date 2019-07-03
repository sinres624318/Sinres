<template>
  <div class="index">
    <indexHender :info="this.scroll"></indexHender>
    <div class="main" ref="main">
      <indexTopBanner :indexTopBanner="indexInfo "></indexTopBanner>
      <indexCenterBanner></indexCenterBanner>
      <indexSeckill></indexSeckill>
      <indexThree></indexThree>
      <indexFour></indexFour>
      <indexRecommend></indexRecommend>
    </div>
  </div>
</template>

<script>
  import indexHender from "../components/index/indexHender"
  import indexTopBanner from "../components/index/indexTopBanner"
  import indexCenterBanner from "../components/index/indexCenterBanner"
  import indexSeckill from "../components/index/indexSeckill"
  import indexThree from "../components/index/indexThree"
  import indexFour from "../components/index/indexFour"
  import indexRecommend from "../components/index/indexRecommend"


  export default {
    name: "index",
    data() {
      return {
        scroll: 0,
        indexInfo: {},
      }
    },
    components: {
      indexHender,
      indexTopBanner,
      indexCenterBanner,
      indexSeckill,
      indexThree,
      indexFour,
      indexRecommend
    },
    mounted() {
      window.addEventListener('scroll', this.handleColor, true)
    },
    methods: {
      handleColor() {
        var top = Math.floor(this.$refs.main.scrollTop);
        this.scroll = top;
      }
    },
    created() {
      this.axios.get("http://10.35.162.113:9005/index/")
        .then((data) => {
          console.log(data)
          this.indexInfo = data.data;
          console.log(this.indexInfo)
        }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>
<style src="../../static/css/index/index.css"></style>
<style scoped>
</style>
