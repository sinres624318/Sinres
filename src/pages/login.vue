<template>
    <div class="landing">
      <LoginHeader/>
      <LoginContent/>
      <LoginFood/>
    </div>
</template>

<script>
  import LoginHeader from '../components/login/loginHeader'
  import LoginContent from '../components/login/loginContent'
  import LoginFood from '../components/login/loginFood'
    export default {
        name: "landing",
      components:{
        LoginHeader,
        LoginContent,
        LoginFood
      },
      created() {
        window.onload=function () {
          document.addEventListener('touchstart',function (event) {
            if(event.touches.length>1){
              event.preventDefault();
            }
          })
          var lastTouchEnd=0;
          document.addEventListener('touchend',function (event) {
            var now=(new Date()).getTime();
            if(now-lastTouchEnd<=300){
              event.preventDefault();
            }
            lastTouchEnd=now;
          },false)
        }
      }
    }
</script>
<style src="../../static/css/login.css"></style>
<style scoped>

</style>
