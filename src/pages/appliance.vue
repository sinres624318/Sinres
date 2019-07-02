<template>
  <div class="appliance">
    <ApplianceHeader></ApplianceHeader>
    <ApplianceSwiper v-if="applianceInfo.banner" :banner="applianceInfo"></ApplianceSwiper>
    <ApplianceHot v-if="applianceInfo.guessLike" :guessLike="applianceInfo"></ApplianceHot>
    <ApplianceClassify v-if="applianceInfo.applianceClassify" :applianceClassify="applianceInfo"></ApplianceClassify>
    <ApplianceRecommendedWelfare v-if="applianceInfo.welfare" :welfare="applianceInfo"></ApplianceRecommendedWelfare>
    <ApplianceBrand v-if="applianceInfo.brand" :brand="applianceInfo"></ApplianceBrand>
    <ApplianceWeek v-if="applianceInfo.weekHot" :weekHot="applianceInfo" @receiveWeek="receiveHandleWeek" :weekHotInfo="barInfo"></ApplianceWeek>
    <ApplianceDetailClassify v-if="applianceInfo.television" @applianceClassifyHandleBar="handleApplianceClassify" :sendApplianceClassify="applianceClassifyInfo"></ApplianceDetailClassify>
    <Loading v-if="!applianceInfo.banner"></Loading>
  </div>
</template>
<script>
  import ApplianceHeader from './../components/appliance/applianceHeader'
  import ApplianceSwiper from './../components/appliance/applianceSwiper'
  import ApplianceHot from './../components/appliance/applianceHot'
  import ApplianceClassify from './../components/appliance/applianceClassify'
  import ApplianceRecommendedWelfare from './../components/appliance/applianceRecommendedWelfare'
  import ApplianceBrand from './../components/appliance/applianceBrand'
  import ApplianceWeek from './../components/appliance/applianceWeek'
  import ApplianceDetailClassify from './../components/appliance/applianceDetailClassify'
  import Loading from './../components/common/loading'
    export default {
        name: "appliance",
      components:{
        ApplianceHeader,
        ApplianceSwiper,
        ApplianceHot,
        ApplianceClassify,
        ApplianceRecommendedWelfare,
        ApplianceBrand,
        ApplianceWeek,
        ApplianceDetailClassify,
        Loading
      },
      created() {
          this.axios.get("https://www.easy-mock.com/mock/5d16dfa8b3e080603f1d5da4/example/appliance")
            .then((data)=>{
              this.applianceInfo = data.data;
              this.barInfo.push(data.data.weekHot);
              this.applianceClassifyInfo.push(data.data.television)
            })
            .catch((err)=>{
              console.log(err)
            })
      },
      data(){
          return{
            applianceInfo:{},
            barInfo:[],
            applianceClassifyInfo:[]
          }
      },
      methods:{
        receiveHandleWeek(val){
          if(val=="weekHot"){
            this.barInfo = [];
            this.barInfo.push(this.applianceInfo.weekHot)
          }else if (val == 'peopleTop') {
            this.barInfo = [];
            this.barInfo.push(this.applianceInfo.peopleTop)
          }else if (val == 'greatRecommend') {
            this.barInfo = [];
            this.barInfo.push(this.applianceInfo.greatRecommend)
          }
        },
        handleApplianceClassify(val){
          if (val == 'television') {
            this.applianceClassifyInfo = [];
            this.applianceClassifyInfo.push(this.applianceInfo.television)
          }else if(val == 'airConditioner'){
            this.applianceClassifyInfo = [];
            this.applianceClassifyInfo.push(this.applianceInfo.airConditioner)
          }else if(val == 'refrigerator'){
            this.applianceClassifyInfo = [];
            this.applianceClassifyInfo.push(this.applianceInfo.refrigerator)
          }else if(val == 'washingMachine'){
            this.applianceClassifyInfo = [];
            this.applianceClassifyInfo.push(this.applianceInfo.washingMachine)
          }else if(val == 'kitchen'){
            this.applianceClassifyInfo = [];
            this.applianceClassifyInfo.push(this.applianceInfo.kitchen)
          }
        }
      }
    }
</script>
<style src="./../../static/css/appliance.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped></style>
