<template>
  <div class="my-vouchers">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle"  tag="div">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">我的信锐券</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
    <ul class="my-vouchers-use">
      <li :class="{'myVouchersFocus':currentIndex == 1}" @click="myVouchersHandleLeft">待使用</li>
      <li :class="{'myVouchersFocus':currentIndex == 2}" @click="myVouchersHandleMiddle">已使用</li>
      <li :class="{'myVouchersFocus':currentIndex == 3}" @click="myVouchersHandleRight">已过期</li>
    </ul>
    <MyVouchersType/>
    <MyVouchersMain/>
  </div>
</template>

<script>
  import NavBar from './../components/common/navBar'
  import MyVouchersType from './../components/myVouchers/myVouchersType'
  import MyVouchersMain from './../components/myVouchers/myVouchersMain'
  import {goBack} from './../assets/js/common'

  export default {
    name: "myVouchers",
    components: {
      NavBar,
      MyVouchersType,
      MyVouchersMain
    },
    methods: {
      backClickHandle() {
        goBack(this.$router)
      },
      myVouchersHandleLeft(){
        this.currentIndex = 1
      },
      myVouchersHandleMiddle(){
        this.currentIndex = 2
      },
      myVouchersHandleRight(){
        this.currentIndex = 3
      }
    },
    data(){
      return{
        currentIndex:1
      }
    }
  }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/myVouchers.css"></style>
<style scoped>

</style>
