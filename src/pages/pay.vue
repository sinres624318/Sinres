<template>
  <div class="pay">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">信锐收银台</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont">&#xe670;</div>
      </template>
    </NavBar>
    <PayNeedPay :totalMoney="money" v-if="money"/>
    <PayOtherPay v-if="money"/>
    <PayOtherPayItem v-if="money"/>
    <PaySubmit @receive="letShadowShow" :totalMoney="money" v-if="money"></PaySubmit>
    <PayShadow v-if="show" @handleHide="funHide"></PayShadow>
    <!--<PayPassword v-if="pwdShow" @sendfalse="handleReceivePwd"/>-->
    <van-popup
      position="bottom"
      v-model="modalShow">
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        :show="jainpanFlag"
        extra-key="."
        theme="custom"
        close-button-text="完成"
        @close="paySendhandle"
        @input="onInput"
        @delete="onDelete"
      />
    </van-popup>
    <Loading v-if="!submitInfo.total"/>
  </div>

</template>

<script>
  import NavBar from './../components/common/navBar'
  import PayNeedPay from './../components/pay/payNeedPay'
  import PayOtherPay from './../components/pay/payOtherPay'
  import PayOtherPayItem from './../components/pay/payOtherPayItem'
  import PaySubmit from './../components/pay/paySubmit'
  import PayShadow from './../components/pay/payShadow'
  import {
    goBack,
    getCookie
  } from './../assets/js/common.js'
  import {defineOrderSubmit} from "./../api/url";
  import PayPassword from './../components/pay/payPassword'
  import Loading from './../components/common/loading'

  import {
    PasswordInput,
    NumberKeyboard,
    Popup
  } from 'vant';

  export default {
    name: "pay",
    components: {
      NavBar,
      PayNeedPay,
      PayOtherPay,
      PayOtherPayItem,
      PaySubmit,
      PayShadow,
      PayPassword,
      Loading,
      'van-password-input': PasswordInput,
      'van-number-keyboard': NumberKeyboard,
      'van-popup': Popup
    },
    data() {
      return {
        show: false,
        jainpanFlag: true,
        pwdShow: false,
        productList: [],
        address: '',
        TEL: '',
        submitInfo: '',
        money: '',
        value: '',
        showKeyboard: true,
        modalShow: false,
      }
    },
    methods: {
      letShadowShow() {
        this.modalShow = true
      },
      funHide(val) {
        this.show = val
      },
      backClickHandle() {
        this.show = true
      },
      handleReceivePwd(val) {
        this.pwdShow = val
      },
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
      paySendhandle() {
        if (this.value.length == 6) {
          this.axios.post("http://10.35.161.65:9005/cart/payord/", {
            "token": getCookie('token'),
            "order_list": this.submitInfo.order_list,
            "total": this.submitInfo.total,
            "paypassword": this.value
          })
            .then((response)=>{
              let data = response.data;
              console.log(data);
              if(data.code ===200){
                console.log(data.msg);
                this.modalShow = false;
                this.$router.replace({name:'AllOrder'})
              }
            })
        }
      }
    },
    created() {
      this.productList = this.$route.params.productList;
      this.address = this.$route.params.address;
      this.TEL = this.$route.params.tel;
      console.log(this.productList, this.productList, this.tel);
      this.axios.post(defineOrderSubmit, {
        "token": getCookie('token'),
        "goodsList": this.productList,
        "addr": this.address,
        "tel": this.TEL
      }).then((data) => {
        console.log(data);
        this.submitInfo = data.data.data
        this.money = this.submitInfo.total;
        console.log(data);
        console.log(this.money);
      }).catch((err) => {
        console.log(err)
      });
    }
  }
</script>
<style src="./../../static/font/iconfont.css"></style>
<style src="./../../static/css/pay.css"></style>
<style scoped>
  .van-password-input {
    top: 50px;
  }

  .van-password-input__security {
    height: 70px;
  }

  .van-popup {
    padding: 0 70px;
    height: 700px;
  }

  /deep/ .van-key {
    height: 90px !important;
    line-height: 90px !important;
  }

  /deep/ .van-number-keyboard__sidebar {
    height: 100% !important;
  }

  /deep/ .van-key--delete,
  /deep/ .van-key--close {
    height: 180px !important;
    line-height: 180px !important;
  }
</style>
