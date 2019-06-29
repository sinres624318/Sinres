<template>
  <div class="register">
    <RegisterHeader @click="onClickLeft"/>
    <RegisterContent/>
    <RegisterMask />
    <RegisterMaskTwo/>
  </div>
</template>

<script>
  import RegisterHeader from "../components/Register/RegisterHeader"
  import RegisterContent from "../components/Register/RegisterContent"
  import RegisterMask from "../components/Register/RegisterMask"
  import RegisterMaskTwo from '../components/Register/RegisterMaskTwo'

    export default {
        name: "Register",
      components:{
        RegisterHeader,
        RegisterContent,
        RegisterMask,
        RegisterMaskTwo
      },
      data(){
          return{
            time:120
          }
      },
      methods:{
          // countdownHandel(){
          //   var countdown=setInterval(()=>{
          //     this.time>0?this.time--:clearInterval(countdown);
          //     console.log(this.time);
          //   },1000);
          // },
        vanishHandle(){
          this.show=false;
        },
        onClickLeft() {
          goBack(this.$router)
        },
        // verifyHandle(){
        //   this.show=false;
        //   this.Observer.$emit("handels",1);
        // }
      }
    }
</script>
<style src="../../static/css/register.css"></style>
<style scoped>

</style>
