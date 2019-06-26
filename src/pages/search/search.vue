<template>
  <div>
    <searchHender></searchHender>
    <searchCenter></searchCenter>
  </div>
</template>

<script>
  import  searchHender from "../../components/search/searchHender"
  import  searchCenter from "../../components/search/searchCenter"
    export default {
        name: "search",
      components:{
        searchHender,
        searchCenter
      }
    }
</script>
<style src="../../../static/css/search/search.css"></style>>
<style src="../../../static/font/iconfont.css"></style>
<style scoped>

</style>
