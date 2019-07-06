<template>
  <div class="content">
    <!--      短信登陆法-->
    <div class="content-account" v-if="loginMode">
      <div class="content-account-first">
        <input
          type="text"
          v-model="TEL"
          placeholder="请输入手机号"
          maxlength="11"
          @input="loginButtonStatusHandle"
          class="content-account-telephoto"/>

        <div class="obtain-verify-code-wrap">
          <button
            class="content-account-findpwd"
            v-if="verifyCodeFlag"
            @click="codeSendHandle">获取验证码
          </button>
          <span v-if="!verifyCodeFlag" class="phone-login-verify-code-down-time">{{countDown}}s重新获取</span>
        </div>
      </div>
      <input
        type="text"
        placeholder="请输入收到的验证码"
        v-model="code"
        maxlength="6"
        @input="loginButtonStatusHandle"
        class="content-account-two">
    </div>

    <!--      账号登陆法-->
    <div class="content-note" v-if="!loginMode">
      <input
        id="username"
        class="content-input"
        maxlength="11" type="text"
        v-model="account"
        @input="loginButtonStatusHandle"
        placeholder="用户名/邮箱/已验证手机"/>
      <div class="content-password">
        <input
          type="password"
          class="content-password-input"
          placeholder="请输入密码"
          v-model="password"
          @input="loginButtonStatusHandle"
          autocomplete="off">
        <button class="content-password-findpwd">忘记密码</button>
      </div>
    </div>
    <button
      :class="['content-login',loginFlag?'can-login':'']"
      :disabled="!loginFlag"
      @click="loginClickHandle">登 录
    </button>
    <div class="content-way">
      <div><span
        class="content-way-verify"
        @click="changeLoginModeHandel">{{content}}</span>
      </div>
      <router-link
        :to="{name:'Register'}"
        tag="div"
        class="content-way-verify"
      >手机快速注册
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    verifyTEL,
    saveCookie
  } from './.././../assets/js/common.js'
  import {Notify} from 'vant'
  import {loginContent} from "./../../api/url"
  export default {
    name: "content",
    data() {
      return {
        loginMode: true,
        loginFlag: false,
        verifyCodeFlag: true,
        content: "短信验证码登陆",
        TEL: '',
        code: '',
        account: '',
        password: '',
        timer: '',
        countDown: 120
      }
    },
    components: {
      Notify
    },
    methods: {
      loginButtonStatusHandle() {
        this.loginFlag = this.loginMode ? this.code.length < 6 || this.TEL.length < 11 ? false : true : this.account.length < 1 || this.password.length < 8 ? false : true;
      },
      loginClickHandle() {
        let info = this.loginMode ? {
          "tel": this.TEL,
          "idtf": this.code
        } : {
          "account": this.account,
          "password": this.password
        };
        this.axios.post('loginContent', info)
          .then((response) => {
            console.log(response);
            let data = response.data;
            if (response.data.code === 200) {
              console.log('登录成功');
              saveCookie('userID', data.data.user_id, 7);
              saveCookie('userName', data.data.user_name, 7);
              saveCookie('token', data.data.token, 7);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      changeLoginModeHandel() {
        this.loginMode = !this.loginMode;
        this.content = this.loginMode ? "账号密码登陆" : "短信验证码登陆";
        if (this.loginMode) {
          this.TEL = '';
          this.code = '';
        } else {
          this.account = '';
          this.password = '';
        }
        this.loginFlag = false;
      },
      codeSendHandle() {
        if (this.TEL.length == 11 && verifyTEL(this.TEL)) {
          this.timer = setInterval(() => {
            if (this.countDown <= 0) {
              clearInterval(this.timer);
              this.verifyCodeFlag = true;
              return;
            }
            this.countDown--
          }, 1000);
          this.verifyCodeFlag = false;
          this.axios.post('loginContent', {
            "tel": this.TEL
          })
            .then((data) => {
              console.log(data);
              let statusCode = data.data.code;
              if (statusCode === 200) {
                console.log('成功发送');
                return
              } else if (statusCode === 403) {
                Notify({
                  message: '该手机号码未注册',
                  duration: 1000,
                  background: 'red',
                  className: 'error-info'
                });
              } else {
                Notify({
                  message: '验证码发送失败',
                  duration: 1000,
                  background: 'red',
                  className: 'error-info'
                });
              }
              clearInterval(this.timer);
              this.verifyCodeFlag = true;
            })
            .catch(function (error) {
              console.log(error);
              clearInterval(this.timer);
              this.verifyCodeFlag = true;
            });
        } else {
          Notify({
            message: '请输入正确的手机号码',
            duration: 1000,
            background: 'red',
            className: 'error-info'
          });
        }
      }
    }
  }
</script>

<style scoped>

</style>
