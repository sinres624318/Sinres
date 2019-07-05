<template>
    <div class="vouchers">
      <NavBar>
        <template v-slot:left>
          <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
        </template>
        <template v-slot:title>
          <div class="title">领券中心</div>
        </template>
        <template v-slot:right>
          <div class="right iconfont">&#xe670;</div>
        </template>
      </NavBar>
      <VouchersMain :vouchersInfo="vouchersInfo" v-if="vouchersInfo.ledList" @sendVouchers="handleSendVouchers"/>
      <SuccessOfGet v-if="SuccessOfGetShow"/>
      <VouchersBar/>
      <Loading v-if="!vouchersInfo.ledList"/>
    </div>
</template>

<script>
  import VouchersBar from './../components/vouchers/vouchersBar'
  import NavBar from './../components/common/navBar'
  import VouchersMain from './../components/vouchers/vouchersMain'
  import {goBack} from './../assets/js/common'
  import Loading from './../components/common/loading'
  import SuccessOfGet from './../components/vouchers/successOfGet'
    export default {
        name: "vouchers",
        components:{
          NavBar,
          VouchersBar,
          VouchersMain,
          SuccessOfGet,
          Loading
        },
      methods:{
        backClickHandle() {
          goBack(this.$router)
        },
        handleSendVouchers(val){
          this.SuccessOfGetShow = val
          console.log(val)
        },
        handleHiddenShow(){
          this.SuccessOfGetShow = false
        }
      },
      created() {
          // this.axios.get("https://www.easy-mock.com/mock/5d16dfa8b3e080603f1d5da4/example/vouchers")
            this.axios.get("http://10.35.162.113:9005/index/vouchers")
            .then((data)=>{
              console.log(data)
              this.vouchersInfo = data.data
            })
      },
      data(){
          return{
            vouchersInfo:{},
            SuccessOfGetShow:false
          }
      }
    }
</script>
<style src="./../../static/css/vouchers.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
