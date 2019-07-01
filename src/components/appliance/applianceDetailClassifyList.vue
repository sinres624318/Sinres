<template>
    <div class="appliance-detail-classify-list">
      <ApplianceDetailClassifyItem :sendApplianceClassify="sendApplianceClassify"/>
    </div>
</template>

<script>
  import ApplianceDetailClassifyItem from './applianceDetailClassifyItem'
    export default {
        name: "applianceDetailClassifyList",
        components:{
          ApplianceDetailClassifyItem
        },
      props:{
        sendApplianceClassify:{
          type:Array,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
