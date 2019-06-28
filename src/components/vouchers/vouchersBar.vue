<template>
    <div class="vouchers-bar">
      <div class="vouchers-ico">
        <i class="iconfont">&#xe643;</i>
        <span class="vouchers-info">领优惠券</span>
      </div>
      <router-link class="my-vouchers-ico" to="/myVouchers" tag="div">
        <i class="iconfont">&#xe608;</i>
        <span class="my-vouchers-info">我的优惠券</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "vouchersBar"
    }
</script>

<style scoped>

</style>
