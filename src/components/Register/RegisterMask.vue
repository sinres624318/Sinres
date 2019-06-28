<template>
  <div class="register-mask"  v-if="show">
    <div class="register-mask-content">
        <div class="register-mask-content-top">
          <img src="../../../static/img/Register/1.png" >
        </div>
      <div class="register-mask-content-middle">
        <span>我们将发送短信/语音验证码至:</span>
        <span >{{photo}}</span>
      </div>
      <div class="register-mask-content-bottom">
        <p @click="vanishHandle">取消</p>
        <p @click="verifyHandel()" class="register-mask-content-bottom-p">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RegisterMask",
      data(){
          return{
            photo:'',
            show:false
          }
      },

      created() {
          this.Observer.$on("handle",(val)=>{
            this.photo = val[0];
            this.show=val[1];
          })
      },
      methods:{
        vanishHandle(){
          this.show=false;
        },
        verifyHandel(){
          this.show=false
          this.Observer.$emit("handels",1);
        }
      }
    }
</script>

<style scoped>

</style>
