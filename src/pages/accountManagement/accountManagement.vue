<template>
  <div class="accountManage-Bos">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">账号管理</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" @click="moreMenuClickHandle">&#xe670;</div>
      </template>
    </NavBar>
    <AccountManagementHenner></AccountManagementHenner>
    <AccountManagementCenter></AccountManagementCenter>
  </div>
</template>

<script>
  import {goBack} from './../../assets/js/common'
  import NavBar from '../../components/common/navBar'
  import AccountManagementHenner from '../../components/accountManagement/accountManagementHenner'
  import AccountManagementCenter from '../../components/accountManagement/accountManagementCenter'
    export default {
        name: "accountManagement",
      data() {
        return {
          flag: false
        }
      },
      components:{
        NavBar,
        AccountManagementHenner,
        AccountManagementCenter
      },
      methods: {
        backClickHandle() {
          goBack(this.$router)
        },
        moreMenuClickHandle() {
          this.flag = !this.flag;
        }
      }
    }
</script>
<style src="../../../static/font/iconfont.css"></style>
<style src="../../../static/css/accountManagement/accountManagement.css"></style>
<style scoped>

</style>
