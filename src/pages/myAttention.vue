<template>
  <div class="myAttention">
    <MyAttentionHeader/>
  <MyAttentionContent/>
    <MyAttentionBottom/>
  </div>
</template>

<script>
  import MyAttentionHeader from "../components/myAttention/myAttentionHeader"
  import MyAttentionContent from "../components/myAttention/myAttentionContent"
  import MyAttentionBottom from '../components/myAttention/myAttentionBottom'
  export default {
        name: "myAttention",
    components:{
      MyAttentionHeader,
      MyAttentionContent,
      MyAttentionBottom
    }
    }
</script>
<style src="../../static/css/myAttention.css"></style>
<style scoped>

</style>
