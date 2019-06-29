<template>
  <div class="register-content">
    <div class="register-content-import">
      <div class="register-content-import-first">
        <select class="register-content-select">
          <option>+86</option>
          <option>+87</option>
          <option>+88</option>
          <option>+89</option>
        </select>
        <input type="text" class="register-content-input" maxlength="11" v-model="telephoneNum" placeholder="请输入手机号"/>
        <span>倒计时</span>
      </div>
      <input type="text" v-show="num==1" v-model="code" class="register-content-input-two" maxlength="6"
             placeholder="请输入验证码">
    </div>
    <div class="register-content-button" v-if="!show" @click="transmitHander()">下一步</div>
    <div class="register-content-button" v-if="show" @click="submitHandle()">注册</div>
  </div>
</template>

<script>
  import {saveCookie} from './../../assets/js/common.js'

  export default {
    name: "RegisterContent",
    data() {
      return {
        show: false,
        telephoneNum: '',
        num: 0,
        code: ""
      }
    },
    methods: {
      transmitHander() {
        var regs = /(13|15|18|17|16|14|19)\d{9}/;
        if (!regs.test(this.telephoneNum)) {
          alert("ghtrhfjhf")
        } else {
          this.show = true;
          this.Observer.$emit("handle", [this.telephoneNum, this.show]);
        }
      },
      obtainCodeHandle() {
        this.axios.post('http://121.199.63.71:9005/regist/', {"tel": this.telephoneNum})
          .then((data) => {
            if (data.code == 200) {
              console.log("验证码发送成功！");
            } else {
              console.log(data);
            }
          })
          .catch((err) => {
            console.log(err);
          })
      },
      submitHandle() {
        /*f2cb20eba8b34501bcc420a7d75064dc*/
        this.axios.post('http://121.199.63.71:9005/regist/', {"tel": this.telephoneNum, "idtf": this.code})
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
      }
    },
    created() {
      this.Observer.$on("handels", (val) => {
        this.num = val
        this.obtainCodeHandle()
      })
    }
  }
</script>

<style></style>
