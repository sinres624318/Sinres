<template>
    <div class="vouchers-main-info-list">
      <VouchersMainInfoItem :vouchersInfo="vouchersInfo" @sendVouchers="handleSendVouchers"/>
    </div>
</template>

<script>
  import VouchersMainInfoItem from './vouchersMainInfoItem'
    export default {
        name: "vouchersMainInfoList",
        components:{
          VouchersMainInfoItem
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
