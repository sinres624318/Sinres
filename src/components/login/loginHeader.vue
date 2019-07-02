<template>
  <div class="header">
    <div class="header-left" @click="onClickLeft">
      <span ></span>
    </div>
    京东登陆
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
  export default {
    name: "LoginHeader",
    methods:{
      onClickLeft() {
        goBack(this.$router)
      },
    }
  }
</script>

<style scoped>

</style>

