<template>
  <div class="cart-total-price">
    <i class="icon_select">全选</i>
    <div class="total" id="totalConfirmDiv">
      <div>
        <p>
          <span>总计：</span>
          <strong id="totalPrice">¥13999.00</strong>
        </p>
        <span id="totalBackMoney">总额¥13999.00 立减¥0.00</span>
      </div>
      <a href="javascript:;" class="buy buyJs">
        <span>去结算</span>
        <em>(1件)</em>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "cartTotalPrice"
    }
</script>

<style scoped>

</style>
