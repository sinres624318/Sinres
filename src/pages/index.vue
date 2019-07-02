<template>
  <div class="index">
    <indexHender :info="this.scroll"></indexHender>
    <div class="main" ref="main"  v-if="indexInfo.seckill">
      <indexTopBanner :indexTopBanner="indexInfo"></indexTopBanner>
      <indexCenterBanner :indexCenterBanner="indexInfo"></indexCenterBanner>
      <indexSeckill :indexSeckill="indexInfo"></indexSeckill>
      <indexThree :indexThree="indexInfo" ></indexThree>
      <indexFour :indexFour="indexInfo"></indexFour>
      <indexRecommend  :indexRecommend="indexInfo"></indexRecommend>
    </div>
    <Loading v-if="!indexInfo.banner"></Loading>
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
  import Loading from "../components/common/loading"

  export default {
    name: "index",
    data() {
      return {
        scroll: 0,
      indexInfo:{},
      }
    },
    components: {
      indexHender,
      indexTopBanner,
      indexCenterBanner,
      indexSeckill,
      indexThree,
      indexFour,
      indexRecommend,
      Loading
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
      this.axios.get("https://www.easy-mock.com/mock/5d184b100c3e0f555a5ba35c/example/index")
        .then((data)=>{
          this.indexInfo=data.data
          console.log(
            this.indexInfo
          )
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
</script>
<style src="../../static/css/index/index.css"></style>
<style scoped>
</style>
