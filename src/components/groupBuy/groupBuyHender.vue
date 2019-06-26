<template>
  <div class="groupBuyHender-hender">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">京东拼购</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from './../../components/common/toolsBar'
    export default {
        name: "groupBuyHender",
      components:{
        NavBar
      },
      methods: {
      }
    }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/groupBuy/groupBuy.css"></style>
<style scoped>

</style>
