<template>
  <div class="register">
    <RegisterHeader/>
    <RegisterContent/>
    <RegisterMask/>
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
    components: {
      RegisterHeader,
      RegisterContent,
      RegisterMask,
      RegisterMaskTwo
    }
  }
</script>
<style src="../../static/css/register.css"></style>
<style scoped>

</style>
