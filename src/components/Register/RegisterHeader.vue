<template>
  <div class="register-header">
    <div class="register-header-left" @click="onClickLeft()">
      <span ></span>
    </div>
    京东注册
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
    export default {
        name: "RegisterHeader",
      methods:{
        onClickLeft() {
          goBack(this.$router)
        },
      }
    }
</script>

<style scoped>

</style>
