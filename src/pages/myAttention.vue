<template>
  <div class="myAttention">
    <MyAttentionHeader v-if="this.myAttentionData.myAttentionList"/>
  <MyAttentionContent v-if="this.myAttentionData.myAttentionList" :list="this.myAttentionData"/>
    <MyAttentionBottom v-if="this.myAttentionData.myAttentionList"/>
    <Loding v-if="!this.myAttentionData.myAttentionList"/>
  </div>
</template>

<script>
  import MyAttentionHeader from "../components/myAttention/myAttentionHeader"
  import MyAttentionContent from "../components/myAttention/myAttentionContent"
  import MyAttentionBottom from '../components/common/recommendedProduct'
  import Loding from './../components/common/loading'
  export default {
        name: "myAttention",
    data(){
          return{
            myAttentionData:''
          }
    },
    components:{
      MyAttentionHeader,
      MyAttentionContent,
      MyAttentionBottom,
      Loding
    },
    created() {
          this.axios.get("https://www.easy-mock.com/mock/5d171afa074c2119ab90b684/example/myAttention")
            .then((data)=>{
              this.myAttentionData=data.data;
            })
            .catch((err)=>{
            console.log(err);
      })

    }
  }
</script>
<style src="../../static/css/myAttention.css"></style>
<style scoped>

</style>
