<template>
    <div class="appliance-week-list">
      <ApplianceWeekItem :weekHotInfo="weekHotInfo"></ApplianceWeekItem>
    </div>
</template>

<script>
  import ApplianceWeekItem from './applianceWeekItem'
    export default {
        name: "applianceWeekList",
        components:{
          ApplianceWeekItem
        },
        props:{
          weekHotInfo:{
            type:Array,
            required:true
          }
      }
    }
</script>

<style scoped>

</style>
