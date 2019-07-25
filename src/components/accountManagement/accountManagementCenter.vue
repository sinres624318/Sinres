<template>
  <div class="accountManage-Center">
    <router-link
      tag="div"
      :to="{name:'ShippingAddress'}"
      class="accountManage-Center-Top">
      <span>收货地址管理</span>
      <router-link tag="span" to="">管理我的地址<i class="iconfont">&#xe624;</i></router-link>
    </router-link>
    <div class="accountManage-Center-Bottom">
      <div class="accountManage-Center-Bottom-Classfiy">
        <span>实名认证</span>
        <span>已实名认证<i class="iconfont">&#xe624;</i></span>
      </div>
      <div class="accountManage-Center-Bottom-Classfiy">
        <span>修改手机号</span>
        <span>176*****955<i class="iconfont">&#xe624;</i></span>
      </div>
      <div class="accountManage-Center-Bottom-Classfiy">
        <span>账号登录密码</span>
        <span>定期修改更安全<i class="iconfont">&#xe624;</i></span>
      </div>
      <div class="accountManage-Center-Bottom-Classfiy" @click="modifyPayPasswordHandle">
        <span>修改支付密码</span>
        <span>已设置<i class="iconfont">&#xe624;</i></span>
      </div>
      <div class="accountManage-Center-Bottom-Classfiy">
        <span>关联邮箱</span>
        <span>7400****@qq.com<i class="iconfont">&#xe624;</i></span>
      </div>
    </div>
    <van-popup
      position="bottom"
      v-model="modalShow">
      <van-password-input
        v-if="payPassword"
        :value="oldValue"
        info="请输入 6 位旧数字"
        @focus="showOldKeyboard = true;showNewKeyboard = false"
      />
      <van-password-input
        :value="newValue"
        info="请输入 6 位新数字"
        @focus="showNewKeyboard = true;showOldKeyboard = false"
      />
      <van-number-keyboard
        :show="showOldKeyboard"
        v-if="payPassword"
        extra-key="."
        theme="custom"
        close-button-text="完成"
        @close="oldClose"
        @input="onInputOld"
        @delete="onDeleteOld"
      />
      <van-number-keyboard
        :show="showNewKeyboard"
        extra-key="."
        theme="custom"
        close-button-text="完成"
        @close="newClose"
        @input="onInputNew"
        @delete="onDeleteNew"
      />
    </van-popup>
  </div>
</template>

<script>
  import {
    PasswordInput,
    NumberKeyboard,
    Popup
  } from 'vant';
  import {
    getCookie,
    saveCookie
  } from './../../assets/js/common'
  import {setPaypwd} from './../../api/url'

  export default {
    name: "accountManagementCenter",
    components: {
      'van-password-input': PasswordInput,
      'van-number-keyboard': NumberKeyboard,
      'van-popup': Popup
    },
    data() {
      return {
        oldValue: '',
        newValue: '',
        payPassword: false,
        showNewKeyboard: false,
        showOldKeyboard: true,
        modalShow: false,
        modifyPayPasswordFlag: true
      }
    },
    created() {
      this.payPassword = getCookie('payPassword') == 'true' ? true : false;
      console.log(this.payPassword);
    },
    methods: {
      newClose() {
        console.log(this.payPassword);
        if (!this.payPassword) {
          console.log(this.newValue);
          console.log(this.newValue);
          this.modalShow = false;
          console.log(getCookie('token'));
          this.axios.post(setPaypwd, {
            "token": getCookie('token'),
            // "new_pwd": this.newValue,
            "old_pwd": this.newValue
          })
            .then((response) => {
              let data = response.data;
              console.log(data);
              if (data.code === 200) {
                saveCookie('payPassword', true)
                this.payPassword = true;
              }
            })
            .catch((error) => {
              console.log(error);
            })
        } else {
          this.axios.post(setPaypwd, {
            "token": getCookie('token'),
            "new_pwd": this.newValue,
            "old_pwd": this.newValue
          })
            .then((response) => {
              let data = response.data;
              console.log(data);
              if (data.code === 200) {
                saveCookie('payPassword', true)
                this.payPassword = true;
              }
            })
            .catch((error) => {
              console.log(error);
            })
        }
      },
      oldClose() {
      },
      modifyPayPasswordHandle() {
        this.modalShow = true;
      },
      onInputNew(key) {
        this.newValue = (this.newValue + key).slice(0, 6);
      },
      onInputOld(key) {
        this.oldValue = (this.oldValue + key).slice(0, 6);
      },
      onDeleteNew() {
        this.newValue = this.newValue.slice(0, this.newValue.length - 1);
      },
      onDeleteOld() {
        this.oldValue = this.oldValue.slice(0, this.oldValue.length - 1);
      }
    }
  }
</script>

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
