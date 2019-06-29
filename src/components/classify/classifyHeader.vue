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
        <i class="iconfont right">&#xe670;</i>
      </div>
    </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
    export default {
        name: "classifyHeader",
      methods:{
        onClickLeft() {
          goBack(this.$router)
        },
      }
    }
</script>

<style scoped>

</style>
