<template>
  <div class="groupBuy-index">
    <groupBuyHender></groupBuyHender>
    <div class="groupBuy-Main" v-if="groupBuyInfo.banner">
      <groupBuySousuo></groupBuySousuo>
      <groupBuyBanner :groupBuyBanner="groupBuyInfo"></groupBuyBanner>
      <groupBuyCenterBanner :groupBuyCenterBanner="groupBuyInfo"></groupBuyCenterBanner>
      <groupBuyDay :groupBuyDay="groupBuyInfo"></groupBuyDay>
      <groupBuyClass :groupBuyClass="groupBuyInfo"></groupBuyClass>
    </div>
    <Loading v-if="!groupBuyInfo.banner"></Loading>
    <groupBuyFooter></groupBuyFooter>
  </div>
</template>

<script>
  import groupBuyHender from '../../components/groupBuy/groupBuyHender'
  import groupBuySousuo from '../../components/groupBuy/groupBuySousuo'
  import groupBuyBanner from '../../components/groupBuy/groupBuyBanner'
  import groupBuyCenterBanner from '../../components/groupBuy/groupBuyCenterBanner'
  import groupBuyDay from '../../components/groupBuy/groupBuyDay'
  import groupBuyFooter from '../../components/groupBuy/groupBuyFooter'
  import groupBuyClass from '../../components/groupBuy/groupBuyClass'
  import Loading from "./../../components/common/loading";
  import {groupBuy} from './../../api/url'

  export default {
    name: "groupBuy",
    data(){
      return{
        groupBuyInfo:{},
      }
    },
    components: {
      groupBuyHender,
      groupBuySousuo,
      groupBuyBanner,
      groupBuyCenterBanner,
      groupBuyDay,
      groupBuyFooter,
      groupBuyClass,
      Loading
    },
    created() {
      // this.axios.get("https://www.easy-mock.com/mock/5d184b100c3e0f555a5ba35c/example/groupBuy")
      this.axios.get(groupBuy)
        .then((data)=>{
          this.groupBuyInfo=data.data
          console.log(data);
        })
        .catch((err)=>{
          console.log(err)
      })
    }
  }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/groupBuy/groupBuy.css"></style>
<style scoped>

</style>
