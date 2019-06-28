<template>
    <div class="appliance-week">
      <ApplianceWeekBar></ApplianceWeekBar>
      <ApplianceWeekList></ApplianceWeekList>
    </div>
</template>

<script>
  import ApplianceWeekBar from './applianceWeekBar'
  import ApplianceWeekList from './applianceWeekList'
    export default {
        name: "applianceWeek",
      components:{
        ApplianceWeekBar,
        ApplianceWeekList
      }
    }
</script>

<style scoped>

</style>
