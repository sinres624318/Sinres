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
      }
    }
</script>
<style src="../../static/css/login.css"></style>
<style scoped>

</style>
