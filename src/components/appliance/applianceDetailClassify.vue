<template>
    <div class="appliance-detail-classify">
      <ApplianceDetailClassifyBar/>
      <ApplianceDetailClassifyList/>
    </div>
</template>

<script>
  import ApplianceDetailClassifyBar from './applianceDetailClassifyBar'
  import ApplianceDetailClassifyList from './applianceDetailClassifyList'
    export default {
        name: "applianceDetailClassify",
      components:{
        ApplianceDetailClassifyBar,
        ApplianceDetailClassifyList
      }
    }
</script>

<style scoped>

</style>
