<template>
  <div class="classify">
    <ClassifyHeader/>
    <ClassifyContent/>
  </div>
</template>

<script>
  import ClassifyHeader from '../components/classify/classifyHeader'
  import ClassifyContent from '../components/classify/classifyContent'
    export default {
        name: "classify",
      components:{
        ClassifyHeader,
        ClassifyContent
      }
    }
</script>
<style src="../../static/iconfont/iconfont.css"></style>
<style src="../../static/css/classify.css"></style>
<style scoped>

</style>
