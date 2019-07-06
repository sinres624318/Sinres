<template>
  <div class="register">
    <RegisterHeader/>
    <RegisterContent
      @obtainCode="obtainCodeHandle"
      @registerSubmit="register"
      @registerButtonStatusHandle="registerButtonStatusHandle"
      :flag="buttonFlag"
      :codeFlag="codeFlag"
      :registerFlag="registerFlag"
      :countDown="countDown"></RegisterContent>
    <RegisterMask
      v-if="maskFlag"
      :TEL="TEL"
      @confirmCancelSendCode="confirmCancelSendCodeHandle"
      @confirmSendCode="confirmSendCodeHandle"/>
    <RegisterMaskTwo/>
  </div>
</template>

<script>
  import RegisterHeader from "../components/Register/RegisterHeader"
  import RegisterContent from "../components/Register/RegisterContent"
  import RegisterMask from "../components/Register/RegisterMask"
  import RegisterMaskTwo from '../components/Register/RegisterMaskTwo'
  import {Notify} from 'vant';
  import {register} from "./../api/url"
  import {
    verifyTEL,
    saveCookie
  } from './../assets/js/common.js'


  export default {
    name: "Register",
    components: {
      RegisterHeader,
      RegisterContent,
      RegisterMask,
      RegisterMaskTwo,
      Notify
    },
    data() {
      return {
        buttonFlag: false,
        maskFlag: false,
        TEL: '',
        countDown: 120,
        codeFlag: false,
        registerFlag: false
      }
    },
    methods: {
      registerButtonStatusHandle(val) {
        let {TEL, code} = val;
        this.registerFlag = TEL.length < 11 || code.length < 6 ? false : true;
      },
      register(val) {
        let {TEL, code} = val;
        if (!verifyTEL(TEL)) {
          Notify({
            message: '请输入正确的手机号码',
            duration: 1000,
            background: 'red',
            className: 'error-info'
          });
          return;
        } else if (code.length < 6) {
          Notify({
            message: '请输入正确的验证码',
            duration: 1000,
            background: 'red',
            className: 'error-info'
          });
          return;
        }
        this.axios.post('register', {"tel": TEL, "idtf": code})
          .then((response) => {
            let data = response.data;
            if (data.code == 200) {
              console.log("注册成功！");
              console.log(data);
              saveCookie('userID', data.data.user_id, 7);
              saveCookie('userName', data.data.user_name, 7);
              saveCookie('token', data.data.token, 7);
              this.$router.replace({name:'Index'})
            }
          })
          .catch((err) => {
            console.log(err);
          })
      },
      obtainCodeHandle(val) {
        let {flag, TEL} = val;
        this.TEL = TEL;
        if (!verifyTEL(TEL)) {
          Notify({
            message: '请输入正确的手机号码',
            duration: 1000,
            background: 'red',
            className: 'error-info'
          });
          return
        }
        this.maskFlag = !this.maskFlag;
      },
      confirmSendCodeHandle(val) {
        let {flag, TEL} = val;
        this.maskFlag = flag;
        this.buttonFlag = !flag;
        this.codeFlag = !flag;
        let timer = setInterval(() => {
          if (this.countDown <= 0) {
            clearInterval(timer);
            this.buttonFlag = !this.buttonFlag;
            return;
          }
          this.countDown--
        }, 1000);
        console.log(TEL);
        this.axios.post('register', {"tel": TEL})
          .then((data) => {
            if (data.data.code == 200) {
              console.log("验证码发送成功！");
            } else {
              clearInterval(timer);
              Notify({
                message: '验证码发送失败',
                duration: 1000,
                background: 'red',
                className: 'error-info'
              });
              this.buttonFlag = !this.buttonFlag;
              console.log(data);
            }
          })
          .catch((err) => {
            clearInterval(timer);
            Notify({
              message: '验证码发送失败',
              duration: 1000,
              background: 'red',
              className: 'error-info'
            });
            this.buttonFlag = !this.buttonFlag;
            console.log(err);
          })
      },
      confirmCancelSendCodeHandle(val) {
        this.maskFlag = val;
        this.buttonFlag = val;
      }
    }
  }
</script>
<style src="../../static/css/register.css"></style>
<style scoped>

</style>
