<template>
  <div class="footprint-header">
    <div class="footprint-header-left" @click="onClickLeft">
      <span ></span>
    </div>
    <div class="footprint-header-middle">
      我的足迹
    </div>
    <div class="footprint-header-right">
      <i class="iconfont right">&#xe670;</i>
    </div>
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
    export default {
      name: "footprintHeader",
      methods: {
        onClickLeft() {
          goBack(this.$router)
        },
      }
    }
</script>

<style scoped>

</style>
