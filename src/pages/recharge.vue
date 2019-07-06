<template>
  <div class="recharge">
    <rechargeHeader/>
    <rechargeItem/>
    <rechargeContent />
  </div>
</template>

<script>
  import rechargeHeader from '../components/recharge/rechargeHeader';
  import rechargeItem from '../components/recharge/recharItem';
  import rechargeContent from '../components/recharge/rechargeContent';
    export default {
      name: "recharge",

      components: {
        rechargeHeader,
        rechargeItem,
        rechargeContent,
      },
    }
</script>
<style src="../../static/css/recharge.css"></style>
<style scoped>

</style>
