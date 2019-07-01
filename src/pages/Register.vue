<template>
  <div class="register">
    <RegisterHeader/>
    <RegisterContent
      @obtainCode="obtainCodeHandle"
      @registerSubmit="register"
      :flag="buttonFlag"
      :codeFlag="codeFlag"
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
  import {downTime} from './../assets/js/common.js'

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
        codeFlag: false
      }
    },
    methods: {
      register(val) {
        let {TEL, code} = val;
        console.log(code.length);
        let regs = /(13|15|18|17|16|14|19)\d{9}/;
        if (!regs.test(TEL)) {
          Notify({
            message: '请输入正确的手机号码',
            duration: 1000,
            background: 'red'
          });
          return;
        } else if (code.length < 6) {
          Notify({
            message: '请输入正确的验证码',
            duration: 1000,
            background: 'red'
          });
          return;
        }
        this.axios.post('http://121.199.63.71:9005/regist/', {"tel": TEL, "idtf":code})
          .then((data) => {
            if (data.code == 200) {
              console.log("注册成功！");
              saveCookie('username', data.user_id, 7);
              saveCookie('token', data.token, 7);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      },
      obtainCodeHandle(val) {
        let {flag, TEL} = val;
        this.TEL = TEL;
        let regs = /(13|15|18|17|16|14|19)\d{9}/;
        if (!regs.test(TEL)) {
          Notify({
            message: '请输入正确的手机号码',
            duration: 1000,
            background: 'red'
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
        }, 1000)
        console.log(TEL);
        this.axios.post('http://121.199.63.71:9005/regist/', {"tel": TEL})
          .then((data) => {
            if (data.data.code == 200) {
              console.log("验证码发送成功！");
            } else {
              clearInterval(timer);
              Notify({
                message: '验证码发送失败',
                duration: 1000,
                background: 'red'
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
              background: 'red'
            });
            this.buttonFlag = !this.buttonFlag;
            console.log(err);
          })
      },
      confirmCancelSendCodeHandle(val) {
        this.maskFlag = val;
        this.buttonFlag = !val;
      }
    }
  }
</script>
<style src="../../static/css/register.css"></style>
<style scoped>

</style>
