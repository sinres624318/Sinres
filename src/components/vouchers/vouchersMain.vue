<template>
    <div class="vouchers-main">
      <div class="vouchers-main-info">
        <VouchersMainInfoBar/>
        <VouchersMainInfoList/>
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
        }
    }
</script>

<style scoped>

</style>
