<template>
    <div class="vouchers-main-info-list">
      <VouchersMainInfoItem :vouchersInfo="vouchersInfo"/>
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
      }
    }
</script>

<style scoped>

</style>
