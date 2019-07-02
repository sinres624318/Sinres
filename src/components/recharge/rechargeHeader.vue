<template>
    <div class="recharge-header">
      <div class="recharge-header-left" @click="onClickLeft()">
        <span></span>
      </div>
      <div class="recharge-header-middle">
        充值
      </div>
      <div class="recharge-header-right">
        <i class="iconfont right">&#xe670;</i>
      </div>
    </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
    export default {
        name: "rechargeHeader",
      methods:{
        onClickLeft() {
          goBack(this.$router)
        },
      }
    }
</script>

<style scoped>

</style>
