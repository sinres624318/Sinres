<template>
    <div class="define-order">
      <DefineOrderHeader/>
      <DefineOrderAddress/>
      <DefineOrderInfo/>
    </div>
</template>

<script>
  import DefineOrderHeader from './../components/defineOrder/defineOrderHeader'
  import DefineOrderAddress from './../components/defineOrder/defineOrderAddress'
  import DefineOrderInfo from './../components/defineOrder/defineOrderInfo'
    export default {
        name: "defineOrder",
        components:{
          DefineOrderHeader,
          DefineOrderAddress,
          DefineOrderInfo
        }
    }
</script>
<style src="./../../static/css/defineOrder.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
