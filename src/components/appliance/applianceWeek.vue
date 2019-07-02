<template>
    <div class="appliance-week">
      <ApplianceWeekBar :weekHot="weekHot" @receiveWeek="receiveHandleWeek"></ApplianceWeekBar>
      <ApplianceWeekList :weekHotInfo="weekHotInfo"></ApplianceWeekList>
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
      },
      props:{
        weekHot:{
          type:Object,
          required:true
        },
        weekHotInfo:{
          type: Array,
          required: true
        }
      },
      methods:{

        receiveHandleWeek(val){
          this.$emit("receiveWeek",val)
        }
      },
      data(){
          return{
          }
      }
    }
</script>

<style scoped>

</style>
