<template>
  <div>
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">我的京东</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" @click="moreMenuClickHandle">&#xe670;</div>
      </template>
    </NavBar>
    <AccountManagementHenner></AccountManagementHenner>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navBar'
  import AccountManagementHenner from '../../components/accountManagement/accountManagementHenner'
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
<style src="../../../static/css/accountManagement/accountManagement.css"></style>
<style scoped>

</style>
