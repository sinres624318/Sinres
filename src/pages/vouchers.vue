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
      <VouchersMain :vouchersInfo="vouchersInfo" v-if="vouchersInfo.ledList"/>
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
    export default {
        name: "vouchers",
        components:{
          NavBar,
          VouchersBar,
          VouchersMain,
          Loading
        },
      methods:{
        backClickHandle() {
          goBack(this.$router)
        }
      },
      created() {
          this.axios.get("https://www.easy-mock.com/mock/5d16dfa8b3e080603f1d5da4/example/vouchers")
            .then((data)=>{
              console.log(data)
              this.vouchersInfo = data.data
            })
      },
      data(){
          return{
            vouchersInfo:{}
          }
      }
    }
</script>
<style src="./../../static/css/vouchers.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
