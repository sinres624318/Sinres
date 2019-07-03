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
               @input="registerButtonStatusHandle"
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
        @input="registerButtonStatusHandle"
        placeholder="请输入验证码">
    </div>
    <button
      :class="['register-content-button',registerFlag?'can-register':'']"
      :disabled="!registerFlag"
      @click="submitHandle()">注册
    </button>
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
        code: "",
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
      codeFlag: {
        type: Boolean,
        required: true
      },
      registerFlag: {
        type: Boolean,
        required: true
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
        this.$emit('registerSubmit', {
          TEL: this.telephoneNum,
          code: this.code
        })
      },
      registerButtonStatusHandle() {
        this.$emit('registerButtonStatusHandle', {
          TEL: this.telephoneNum,
          code: this.code
        })
      }
    }
  }
</script>

<style></style>
