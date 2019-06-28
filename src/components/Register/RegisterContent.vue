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
    <div class="register-content-button" @click="codeHandle()">下一步</div>
  </div>
</template>

<script>
  // import "../../../static/css/register.css"
  export default {
    name: "RegisterContent",
    data() {
      return {
        thow: false,
        telephoneNum: ''
      }
    },
    methods: {
      /*transmitHander(){
        var regs=/(13|15|18|17|16|14|19)\d{9}/;
        if(!regs.test(this.telephoneNum)){
         alert("ghtrhfjhf")
        }else{
        this.show=true;
        this.Observer.$emit("handle",[this.telephoneNum,this.show]);
        }
      }*/
      codeHandle() {
        console.log(this.telephoneNum)
        this.axios.post('http://10.35.161.57:9001/regist/', {
          "tel": this.telephoneNum
        })
          .then((response) => {
            console.log(response);
            if (response.data.code === 200) {
              alert('成功发送')
            }
          })
          .catch(function (error) {
            console.log(error.msg);
          });

      }
    },

  }
</script>

<style scoped>

</style>
