<template>
  <div>
    <groupBuyHender></groupBuyHender>
    <groupBuyBanner></groupBuyBanner>
    <toolsBar></toolsBar>
  </div>
</template>

<script>
  import toolsBar from "../../components/common/toolsBar"
  import groupBuyHender from '../../components/groupBuy/groupBuyHender'
  import groupBuyBanner from '../../components/groupBuy/groupBuyBanner'
    export default {
        name: "groupBuy",
      components:{
        groupBuyHender,
        groupBuyBanner,
        toolsBar
      }
    }
</script>

<style scoped>

</style>
