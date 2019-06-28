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
      <input type="text" v-show="num==1" class="register-content-input-two" maxlength="6" placeholder="请输入验证码">
    </div>
    <div class="register-content-button" @click="transmitHander()">下一步</div>
  </div>
</template>

<script>
  export default {
    name: "RegisterContent",
    data(){
      return{
        show:false,
        telephoneNum:'',
        num:0
      }
    },
    methods:{
      transmitHander(){
        var regs=/(13|15|18|17|16|14|19)\d{9}/;
        if(!regs.test(this.telephoneNum)){
          alert("ghtrhfjhf")
        }else{
          this.show=true;
          this.Observer.$emit("handle",[this.telephoneNum,this.show]);
        }
      }
    },
    created() {
      this.Observer.$on("handels",(val)=>{
        this.num=val
      })
    }
  }
</script>

<style scoped>
</style>
