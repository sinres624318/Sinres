<template>
  <div class="myAttention-header">
    <div class="myAttention-header-left" @click="onClickLeft()">
      <span></span>
    </div>
    <div class="myAttention-header-middle">
      我的关注
    </div>
    <div class="myAttention-header-right">
      <i class="iconfont right" @click="moreMenuClickHandle">&#xe670;</i>
    </div>
    <MoreMenu v-if="flag" @maskClickHandle="maskClickHandle"></MoreMenu>
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common';
  import MoreMenu from "./../../components/common/moreMenu";

  export default {
    name: "classifyHeader",
    methods:{
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
    },
    components:{
      MoreMenu
    },
    data(){
      return{
        flag:false
      }
    }
  }
</script>

<style scoped>

</style>
