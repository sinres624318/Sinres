<template>
  <div class="classify">
    <ClassifyHeader v-if="this.classifyInfo.right" />
    <ClassifyContent v-if="this.classifyInfo.right" :info="this.classifyInfo"/>
<!--    <MoreMenu v-if="this.classifyInfo.right" v-show="show"/>-->
    <Loading v-if="!this.classifyInfo.right"/>
  </div>
</template>

<script>
  import ClassifyHeader from '../components/classify/classifyHeader'
  import ClassifyContent from '../components/classify/classifyContent'
  import {classify} from "./../api/url"

  import Loading from "../components/common/loading";
    export default {
        name: "classify",
      data(){
        return{
          classifyInfo:{},
        }
      },
      components:{
        Loading,
        ClassifyHeader,       
        ClassifyContent,
      },
      //http://10.35.161.13:9005/classify/
      created() {
          this.axios.get(classify)
            .then((data)=>{
              console.log(data.data);
              this.classifyInfo=data.data;
            })
            .catch((err)=>{
              console.log(err);
            })
      },
      methods:{
        showHandel(val){
          console.log(val)
          this.show=val
        }
      }
    }
</script>
<style src="../../static/font/iconfont.css"></style>
<style src="../../static/css/classify.css"></style>
<style scoped>

</style>
