<template>
  <div class="appliance">
    <ApplianceHeader></ApplianceHeader>
    <ApplianceSwiper></ApplianceSwiper>
    <ApplianceHot></ApplianceHot>
    <ApplianceClassify></ApplianceClassify>
    <ApplianceRecommendedWelfare></ApplianceRecommendedWelfare>
    <ApplianceBrand></ApplianceBrand>
    <ApplianceWeek></ApplianceWeek>
    <ApplianceDetailClassify></ApplianceDetailClassify>
  </div>
</template>

<script>
  import ApplianceHeader from './../components/appliance/applianceHeader'
  import ApplianceSwiper from './../components/appliance/applianceSwiper'
  import ApplianceHot from './../components/appliance/applianceHot'
  import ApplianceClassify from './../components/appliance/applianceClassify'
  import ApplianceRecommendedWelfare from './../components/appliance/applianceRecommendedWelfare'
  import ApplianceBrand from './../components/appliance/applianceBrand'
  import ApplianceWeek from './../components/appliance/applianceWeek'
  import ApplianceDetailClassify from './../components/appliance/applianceDetailClassify'
    export default {
        name: "appliance",
      components:{
        ApplianceHeader,
        ApplianceSwiper,
        ApplianceHot,
        ApplianceClassify,
        ApplianceRecommendedWelfare,
        ApplianceBrand,
        ApplianceWeek,
        ApplianceDetailClassify
      }
    }
</script>
<style src="./../../static/css/appliance.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped></style>
