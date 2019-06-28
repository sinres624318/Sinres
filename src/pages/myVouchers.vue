<template>
    <div class="my-vouchers">
      <NavBar>
        <template v-slot:left>
          <router-link class="left iconfont" to="/vouchers" tag="div">&#xe61c;</router-link>
        </template>
        <template v-slot:title>
          <div class="title">我的信锐券</div>
        </template>
        <template v-slot:right>
          <div class="right iconfont">&#xe670;</div>
        </template>
      </NavBar>
      <ul class="my-vouchers-use">
        <li>待使用</li>
        <li>已使用</li>
        <li>已过期</li>
      </ul>
      <MyVouchersType/>
      <MyVouchersMain/>
    </div>
</template>

<script>
  import NavBar from './../components/common/navBar'
  import MyVouchersType from './../components/myVouchers/myVouchersType'
  import MyVouchersMain from './../components/myVouchers/myVouchersMain'
    export default {
        name: "myVouchers",
        components:{
          NavBar,
          MyVouchersType,
          MyVouchersMain
        }
    }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/myVouchers.css"></style>
<style scoped>

</style>
