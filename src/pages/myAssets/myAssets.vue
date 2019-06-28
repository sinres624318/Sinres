<template>
  <div class="myAssets-y">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">我的资产</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" @click="moreMenuClickHandle">&#xe670;</div>
      </template>
    </NavBar>
    <myAssetsCenter></myAssetsCenter>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navBar'
  import myAssetsCenter from '../../components/myAssets/myAssetsCenter'
    export default {
        name: "myAssets",
      data() {
        return {
          flag: false
        }
      },
      components:{
        myAssetsCenter,
        NavBar
      },
      methods: {
        backClickHandle() {
          this.$router.go(-1);
        },
        moreMenuClickHandle() {
          this.flag = !this.flag;
        }
      }
    }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/myAssets/myAssets.css"></style>
<style scoped>

</style>
