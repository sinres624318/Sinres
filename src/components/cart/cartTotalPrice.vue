<template>
  <div :class="[allCheck?'checked':'','cart-total-price']">
    <i
      @click="allCheckHandle"
      class="icon_select">全选</i>
    <div class="total" id="totalConfirmDiv">
      <div>
        <p>
          <span>总计：</span>
          <strong id="totalPrice">¥{{totalPrice}}</strong>
        </p>
        <span id="totalBackMoney">总额&nbsp;¥{{totalPrice}}&nbsp;立减&nbsp;¥0.00</span>
      </div>
      <router-link
        :to="{name:'DefineOrder'}"
        class="buy buyJs">
        <span>去结算</span>
        <em>({{productNum}}件)</em>
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
      },
      totalPrice: {
        type: String,
        required: true
      },
      productNum:{
        type:String,
        required: true
      }
    },
    methods: {
      allCheckHandle() {
        this.$store.commit('allCheckHandle')
      }
    }
  }
</script>

<style scoped>

</style>
