<template>
  <div :class="[allCheck?'checked':'','cart-total-price']">
    <i class="icon_select">全选</i>
    <div class="total" id="totalConfirmDiv">
      <div>
        <p>
          <span>总计：</span>
          <strong id="totalPrice">¥13999.00</strong>
        </p>
        <span id="totalBackMoney">总额¥13999.00 立减¥0.00</span>
      </div>
      <router-link
        :to="{name:'DefineOrder'}"
        class="buy buyJs">
        <span>去结算</span>
        <em>(1件)</em>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartTotalPrice",
    props: {
      allCheck: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
