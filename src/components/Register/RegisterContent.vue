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
        <input type="text"
               class="register-content-input"
               maxlength="11"
               v-model="telephoneNum"
               placeholder="请输入手机号"/>
        <span v-if="!flag" @click="obtainCodeHandle()">获取验证码</span>
        <span v-if="flag">{{countDown}}s后重新获取</span>
      </div>
      <input
        type="text"
        v-if="codeFlag"
        v-model="code"
        class="register-content-input-two"
        maxlength="6"
        placeholder="请输入验证码">
    </div>
    <div class="register-content-button" @click="submitHandle()">注册</div>
  </div>
</template>

<script>
  import {saveCookie} from './../../assets/js/common.js'

  export default {
    name: "RegisterContent",
    data() {
      return {
        telephoneNum: '',
        num: 0,
        code: ""
      }
    },
    props: {
      flag: {
        type: Boolean,
        required: true
      },
      countDown: {
        type: Number,
        required: true
      },
      codeFlag:{
        type:Boolean,
        required:true
      }
    },
    methods: {
      obtainCodeHandle() {
        this.$emit('obtainCode', {
          flag: true,
          TEL: this.telephoneNum
        })
      },
      submitHandle() {
        /*f2cb20eba8b34501bcc420a7d75064dc*/
        this.$emit('registerSubmit', {
          TEL: this.telephoneNum,
          code:this.code
        })
      }
    }
  }
</script>

<style></style>
