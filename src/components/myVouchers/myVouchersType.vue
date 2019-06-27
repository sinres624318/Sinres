<template>
    <div class="my-vouchers-type">
      <span @click="changeTogType()">
        <em>类型</em>
        <i class="iconfont">&#xe654;</i>
      </span>
      <span @click="changeTogState()">
        <em>状态</em>
        <i class="iconfont">&#xe654;</i>
      </span>
      <span @click="changeTogGranularity()">
        <em>优惠力度</em>
        <i class="iconfont">&#xe654;</i>
      </span>
      <div class="my-vouchers-type-rule">
        <i class="iconfont">&#xe621;</i>
      </div>
      <MyVouchersShadow v-if="show" @handleLetShow="letShow"></MyVouchersShadow>
      <MyVouchersShadow v-if="showState" @handleStateShow="letStateShow"></MyVouchersShadow>
      <MyVouchersShadow v-if="showGranularity" @handleGranularityShow="letGranularityShow"></MyVouchersShadow>
      <MyVouchersAllType v-if="show"></MyVouchersAllType>
      <MyVouchersState v-if="showState"></MyVouchersState>
      <MyVouchersGranularity v-if="showGranularity"></MyVouchersGranularity>
    </div>
</template>

<script>
  import MyVouchersTypeRuleTitle from './myVouchersTypeRuleTitle'
  import MyVouchersShadow from './myVouchersShadow'
  import MyVouchersAllType from './myVouchersAllType'
  import MyVouchersState from './myVouchersState'
  import MyVouchersGranularity from './myVouchersGranularity'
    export default {
        name: "myVouchersType",
      data(){
        return{
          show:false,
          showState:false,
          showGranularity:false
        }
      },
      methods:{
        changeTogType(){
          this.show = !this.show
        },
        changeTogState(){
          this.showState = !this.showState
        },
        changeTogGranularity(){
          this.showGranularity = !this.showGranularity
        },
        letShow(val){
          this.show = val
        },
        letStateShow(val){
          this.showState = val
        },
        letGranularityShow(val){
          this.showGranularity = val
        }
      },
      components:{
        MyVouchersTypeRuleTitle,
        MyVouchersShadow,
        MyVouchersAllType,
        MyVouchersState,
        MyVouchersGranularity
      }
    }
</script>

<style scoped>

</style>
