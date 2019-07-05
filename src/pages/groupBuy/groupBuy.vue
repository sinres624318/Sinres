<template>
  <div class="groupBuy-index">
    <groupBuyHender></groupBuyHender>
    <div class="groupBuy-Main">
      <groupBuySousuo></groupBuySousuo>
      <groupBuyBanner></groupBuyBanner>
      <groupBuyCenterBanner></groupBuyCenterBanner>
      <groupBuyDay></groupBuyDay>
      <groupBuyClass></groupBuyClass>
    </div>
    <groupBuyFooter></groupBuyFooter>
  </div>
</template>

<script>
  import groupBuyHender from '../../components/groupBuy/groupBuyHender'
  import groupBuySousuo from '../../components/groupBuy/groupBuySousuo'
  import groupBuyBanner from '../../components/groupBuy/groupBuyBanner'
  import groupBuyCenterBanner from '../../components/groupBuy/groupBuyCenterBanner'
  import groupBuyDay from '../../components/groupBuy/groupBuyDay'
  import groupBuyFooter from '../../components/groupBuy/groupBuyFooter'
  import groupBuyClass from '../../components/groupBuy/groupBuyClass'

  export default {
    name: "groupBuy",
    components: {
      groupBuyHender,
      groupBuySousuo,
      groupBuyBanner,
      groupBuyCenterBanner,
      groupBuyDay,
      groupBuyFooter,
      groupBuyClass
    }
  }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/groupBuy/groupBuy.css"></style>
<style scoped>

</style>
