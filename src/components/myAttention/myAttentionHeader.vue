<template>
  <div class="myAttention-header">
    <div class="myAttention-header-left" @click="onClickLeft()">
      <span></span>
    </div>
    <div class="myAttention-header-middle">
      我的关注
    </div>
    <div class="myAttention-header-right">
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
