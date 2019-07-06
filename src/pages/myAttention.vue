<template>
  <div class="myAttention">
    <MyAttentionHeader v-if="this.myAttentionData.myAttentionList"/>
  <MyAttentionContent v-if="this.myAttentionData.myAttentionList" :list="this.myAttentionData"/>
    <MyAttentionBottom v-if="this.myAttentionData.myAttentionList"/>
    <Loding v-if="!this.myAttentionData.myAttentionList"/>
  </div>
</template>

<script>
  import MyAttentionHeader from "../components/myAttention/myAttentionHeader";
  import MyAttentionContent from "../components/myAttention/myAttentionContent";
  import MyAttentionBottom from '../components/myAttention/muAttentionBottom';
  import Loding from './../components/common/loading';
  import {myAttention} from './../api/url'
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
          this.axios.post("myAttention",
             {
                "token":"123456",
           })
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
<!--<style src="../../static/css/common/recommendedProduct.css"></style>-->
<style scoped>

</style>
