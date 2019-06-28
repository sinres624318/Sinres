<template>
    <div class="vouchers">
      <NavBar>
        <template v-slot:left>
          <div class="left iconfont">&#xe61c;</div>
        </template>
        <template v-slot:title>
          <div class="title">领券中心</div>
        </template>
        <template v-slot:right>
          <div class="right iconfont">&#xe670;</div>
        </template>
      </NavBar>
      <VouchersMain/>
      <VouchersBar/>
    </div>
</template>

<script>
  import VouchersBar from './../components/vouchers/vouchersBar'
  import NavBar from './../components/common/navBar'
  import VouchersMain from './../components/vouchers/vouchersMain'
    export default {
        name: "vouchers",
        components:{
          NavBar,
          VouchersBar,
          VouchersMain
        }
    }
</script>
<style src="./../../static/css/vouchers.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
