<template>
  <div class="header">
    <div class="header-left" @click="goBackClickHandle">
      <span></span>
    </div>
    登陆
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common.js'
  export default {
    name: "LoginHeader",
    methods:{
      goBackClickHandle(){
        goBack(this.$router)
      }
    }
  }
</script>

<style scoped>

</style>

