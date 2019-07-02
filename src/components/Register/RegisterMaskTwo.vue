<template>
    <div class="register-mask-two" v-if="show">
        <div class="register-mask-two-txt">
          <h1>注册协议即隐私政策</h1>
          <RegisterMaskTwoContent/>
          <p class="register-mask-two-txt-p">点击同意即表示您已阅读并同意<a href="https://in.m.jd.com/help/app/register_info.html">《京东用户注册协议》</a>与<a href="https://in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于<a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a></p>
          <div class="register-mask-two-txt-food">
            <p @click="backHandel" class="register-mask-two-txt-food-p1">不同意</p>
            <p @click="changeHandel" class="register-mask-two-txt-food-p2">同意</p>
          </div>
        </div>
    </div>
</template>

<script>
  import RegisterMaskTwoContent from './RegisterMaskTwoContent'
    export default {
        name: "RegisterMaskTwo",
      components:{
        RegisterMaskTwoContent
      },
      data(){
          return{
            show:true,
          }
      },
      methods:{
        backHandel(){
          this.$router.back();
        },
        changeHandel(){
          this.show=false;
        }
      }
    }
</script>

<style scoped>

</style>
