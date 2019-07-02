<template>
  <div class="groupBuyHender">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">京东拼购</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" >&#xe670;</div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navBar'
    export default {
        name: "groupBuyHender",
      components:{
          NavBar,
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
