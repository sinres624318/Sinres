<template>
  <div>
  <div class="groupBuyHender-header">
    <i class="iconfont groupBuyHender-header-icon-left" @click="backClickHandle">&#xe61c;</i>
    <h3>京东拼购</h3>
    <div class="groupBuyHender-header-icon-right">
      <i class="iconfont">&#xe670;</i>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "groupBuyHender",
      components:{
      },
      methods: {
        backClickHandle() {
          this.$router.go(-1);
        },
      }
    }
</script>

<style scoped>

</style>
