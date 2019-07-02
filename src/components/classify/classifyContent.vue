<template>
  <div class="classify-content">
    <ClassifyContentLeft :left="info.left"/>
    <ClassifyContentRight :right="info.right"/>
  </div>
</template>

<script>
  import ClassifyContentLeft from './classifyContentLeft'
  import ClassifyContentRight from './classifyContentRight'
    export default {
        name: "classifyContent",
      props: {
        info: {
          type: Object,
          required: true
        }
      },
     components:{
       ClassifyContentLeft,
       ClassifyContentRight
     }
    }
</script>

<style scoped>

</style>
