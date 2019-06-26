<template>
  <div class="register-content">
    <div class="register-content-import">
      <select class="register-content-select">
        <option>+86</option>
        <option>+87</option>
        <option>+88</option>
        <option>+89</option>
      </select>
    <input type="text" class="register-content-input" maxlength="11" v-model="telephoneNum" placeholder="请输入手机号"/>
      </div>
    <div class="register-content-button" @click="transmitHander()">下一步</div>
  </div>
 </template>

<script>
  // import "../../../static/css/register.css"
    export default {
        name: "RegisterContent",
      data(){
          return{
            thow:false,
            telephoneNum:''
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

    }
</script>

<style scoped>

</style>
