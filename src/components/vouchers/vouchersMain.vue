<template>
    <div class="vouchers-main">
      <div class="vouchers-main-info">
        <VouchersMainInfoBar/>
        <VouchersMainInfoList :vouchersInfo="vouchersInfo"/>
      </div>
    </div>
</template>

<script>
  import VouchersMainInfoBar from './vouchersMainInfoBar'
  import VouchersMainInfoList from './vouchersMainInfoList'
    export default {
        name: "vouchersMain",
        components:{
          VouchersMainInfoBar,
          VouchersMainInfoList
        },
      props:{
        vouchersInfo:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
