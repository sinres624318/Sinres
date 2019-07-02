<template>
  <div class="classify">
    <ClassifyHeader v-if="this.classifyInfo.right"/>
    <ClassifyContent v-if="this.classifyInfo.right" :info="this.classifyInfo"/>
    <Loading v-if="!this.classifyInfo.right"/>
  </div>
</template>

<script>
  import ClassifyHeader from '../components/classify/classifyHeader'
  import ClassifyContent from '../components/classify/classifyContent'
  import Loading from "../components/common/loading";
    export default {
        name: "classify",
      data(){
        return{
          classifyInfo:{}
        }
      },
      components:{
        Loading,
        ClassifyHeader,       
        ClassifyContent,
      },
      created() {
          this.axios.get("https://www.easy-mock.com/mock/5d171afa074c2119ab90b684/example/classify")
            .then((data)=>{
              this.classifyInfo=data.data;
            })
            .catch((err)=>{
              console.log(err);
            })


      }
    }
</script>
<style src="../../static/iconfont/iconfont.css"></style>
<style src="../../static/css/classify.css"></style>
<style scoped>

</style>
