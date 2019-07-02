<template>
    <div class="appliance-detail-classify">
      <ApplianceDetailClassifyBar @applianceClassifyHandleBar="handleApplianceClassify"/>
      <ApplianceDetailClassifyList :sendApplianceClassify="sendApplianceClassify"/>
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
      },
      props:{
        sendApplianceClassify:{
          type:Array,
          required:true
        }
      },
      methods:{
        handleApplianceClassify(val){
          this.$emit("applianceClassifyHandleBar",val)
        }
      }
    }
</script>

<style scoped>

</style>
