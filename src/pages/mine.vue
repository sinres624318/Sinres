<template>
  <div class="mine">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">我的信锐</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" @click="moreMenuClickHandle">&#xe670;</div>
      </template>
    </NavBar>
    <MineUserInfo v-if="userInfo.accountInfo" :accountInfo="userInfo.accountInfo"></MineUserInfo>
    <MineOrderCell v-if="userInfo.accountInfo"></MineOrderCell>
    <MineAssetCell v-if="userInfo.assetInfo" :assetInfo="userInfo.assetInfo"></MineAssetCell>
    <MineAssetsCell v-if="userInfo.browseInfo" :browseInfo="userInfo.browseInfo"></MineAssetsCell>
    <MineActivity v-if="userInfo.accountInfo"></MineActivity>
    <MineRecommend v-if="userInfo.productList" :recommendedProduct="userInfo.productList"></MineRecommend>
    <MoreMenu v-if="flag" @maskClickHandle="maskClickHandle"></MoreMenu>
    <Loading v-if="!userInfo.accountInfo"></Loading>
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
  import Loading from '../components/common/loading'
  import {
    goBack,
    getCookie
  } from './../assets/js/common'

  export default {
    name: "mine",
    data() {
      return {
        flag: false
      }
    },
    components: {
      NavBar,
      MineUserInfo,
      MineOrderCell,
      MineAssetCell,
      MineAssetsCell,
      MineActivity,
      MineRecommend,
      MoreMenu,
      Loading
    },
    methods: {
      backClickHandle() {
        goBack(this.$router)
      },
      moreMenuClickHandle() {
        console.log(1);
        this.flag = true;
      },
      maskClickHandle(val) {
        this.flag = val;
      }
    },
    created() {
      this.$store.dispatch('getUserInfo', {token: getCookie('token'), vue: this})
    },
    computed: {
      userInfo() {
        return this.$store.state.userInfo
      }
    }
  }
</script>
<style src="./../../static/css/mine/mine.css"></style>
<style scoped>

</style>
