<template>
  <div class="mine">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="onClickLeft">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">我的京东</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
    <MineUserInfo></MineUserInfo>
    <MineOrderCell></MineOrderCell>
    <MineAssetCell></MineAssetCell>
    <MineAssetsCell></MineAssetsCell>
    <MineActivity></MineActivity>
    <MineRecommend></MineRecommend>
    <MoreMenu></MoreMenu>
  </div>
</template>

<script>
  import NavBar from './../components/common/navBar'
  import MineUserInfo from '../components/mine/mineUserInfo'
  import MineOrderCell from '../components/mine/mineOrderCell'
  import MineAssetCell from '../components/mine/mineAssetCell'
  import MineAssetsCell from '../components/mine/mineAssetsCell'
  import MineActivity from '../components/mine/mineActivity'
  import MineRecommend from '../components/mine/mineRecommend'
  import MoreMenu from '../components/common/moreMenu'

  export default {
    name: "mine",
    components: {
      NavBar,
      MineUserInfo,
      MineOrderCell,
      MineAssetCell,
      MineAssetsCell,
      MineActivity,
      MineRecommend,
      MoreMenu
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    }
  }
</script>
<style src="./../../static/css/mine/mine.css"></style>
<style scoped>

</style>
