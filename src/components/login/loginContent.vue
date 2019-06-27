<template>
  <div class="content">
    <!--      短信登陆法-->
    <div class="content-note" v-if="find">
      <input id="username" class="content-input" maxlength="11" type="text" placeholder="用户名/邮箱/已验证手机"/>
      <div class="content-password">
        <input type="password" class="content-password-input" placeholder="请输入密码"
               autocomplete="off">
        <button class="content-password-findpwd">忘记密码</button>
      </div>
    </div>
    <!--      账号登陆法-->
    <div class="content-account" v-if="show">
      <div class="content-account-first">
        <input type="text" v-model="tel" placeholder="请输入手机号" maxlength="11" class="content-account-telephoto"/>
        <button class="content-account-findpwd" @click="codeHandle">获取验证码</button>
      </div>
      <input type="text" placeholder="请输入收到的验证码" class="content-account-two">
    </div>

    <button class="content-login">登 录</button>
    <div class="content-way">
      <div><span class="content-way-verify" @click="cutHandel" v-model="content">{{content}}</span></div>

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
  export default {
    name: "content",
    data() {
      return {
        show: true,
        find: false,
        content: "短信验证码登陆",
        tel: ''
      }
    },
    methods: {
      cutHandel() {
        if (this.show == true) {
          this.show = false;
          this.content = "账号密码登陆"
        } else if (this.show == false) {
          this.show = true;
          this.content = "短信验证码登陆"
        }
        if (this.find == false) {
          this.find = true;
        } else if (this.find == true) {
          this.find = false;
        }
      },
      codeHandle() {
        this.axios.post('http://10.35.161.36:9001/regist', {
          tel: this.tel
        })
          .then((response) => {
            console.log(response);
            if (response.data.code === 200) {
              alert('成功发送')
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>

</style>
