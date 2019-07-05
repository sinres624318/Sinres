<template>
    <div class="vouchers-main">
      <div class="vouchers-main-info">
        <VouchersMainInfoBar/>
        <VouchersMainInfoList :vouchersInfo="vouchersInfo" @sendVouchers="handleSendVouchers"/>
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
      },
      methods:{
        handleSendVouchers(val){
          this.$emit("sendVouchers",val)
        }
      }
    }
</script>

<style scoped>

</style>
