<template>
  <div class="recharge-header">
    <div class="recharge-header-left" @click="onClickLeft()">
      <span></span>
    </div>
    <div class="recharge-header-middle">
      充值
    </div>
    <div class="recharge-header-right">
      <i class="iconfont right" @click="moreMenuClickHandle">&#xe670;</i>
    </div>
    <MoreMenu v-if="flag" @maskClickHandle="maskClickHandle"></MoreMenu>
  </div>
</template>

<script>
  import MoreMenu from "./../../components/common/moreMenu";
  import {goBack} from './../../assets/js/common'

  export default {
    components: {
      MoreMenu
    },
    data(){
      return{
        flag:false
      }
    },
    name: "rechargeHeader",
    methods: {
      onClickLeft() {
        goBack(this.$router)
      },
      moreMenuClickHandle() {
        console.log(1);
        this.flag = true;
      },
      maskClickHandle(val) {
        this.flag = val;
      }
    }
  }
</script>

<style scoped>

</style>
