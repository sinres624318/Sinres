<template>
    <div class="define-order-header">
      <i class="iconfont" @click="backClickHandle">&#xe61c;</i>
      <p>确认订单</p>
    </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
    export default {
        name: "defineOrderHeader",
        methods:{
          backClickHandle(){
            goBack(this.$router)
          }
        }
    }
</script>

<style scoped>

</style>
