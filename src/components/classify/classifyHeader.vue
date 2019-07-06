<template>
    <div class="classify-header">
      <div class="classify-header-left" @click="onClickLeft">
        <span ></span>
      </div>
      <div class="classify-header-middle">
        <i class="iconfont search">&#xe68d;</i>
        <input type="text" placeholder="外置光驱" maxlength="20">
      </div>
      <div class="classify-header-right">
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
      data(){
        return{
          show:'',
          flag:false
        }
      },
      methods:{
        onClickLeft() {
          goBack(this.$router);
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
    }
    }
</script>

<style scoped>

</style>
