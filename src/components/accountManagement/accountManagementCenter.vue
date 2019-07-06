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
        <span>京东支付密码</span>
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
        :value="value"
        info="密码为 6 位数字"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        :show="showKeyboard"
        extra-key="."
        theme="custom"
        close-button-text="完成"
        @close="change"
        @input="onInput"
        @delete="onDelete"
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

  export default {
    name: "accountManagementCenter",
    components: {
      'van-password-input': PasswordInput,
      'van-number-keyboard': NumberKeyboard,
      'van-popup': Popup
    },
    data() {
      return {
        oldValue:'',
        value: '',
        showKeyboard: true,
        modalShow: false,
        modifyPayPasswordFlag: true
      }
    },
    methods: {
      change(){
          console.log(this.value);
      },
      modifyPayPasswordHandle() {
        this.modalShow = true;
      },
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
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
    height:600px;
  }
  /deep/ .van-key {
    height: 90px !important;
    line-height: 90px !important;
  }
  /deep/ .van-number-keyboard__sidebar {
    height: 100%!important;
  }
  /deep/ .van-key--delete,
  /deep/ .van-key--close {
    height: 180px !important;
    line-height: 180px !important;
  }
</style>
