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
      <a href="javascript:;"
        @click="countProductHandle"
        class="buy buyJs">
        <span>去结算</span>
        <em>({{productNum}}件)</em>
      </a>
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
      productNum: {
        type: String,
        required: true
      }
    },
    methods: {
      countProductHandle() {
        let goodslist = [];
        let productList = this.$store.state.cartInfo.cartShopList;
        productList.forEach((shop, shopIndex) => {
          shop.productList.forEach((product, productIndex) => {
            if (product.checked) {
              let productKey = product.productID;
              goodslist.push({[productKey]:product.productNum})
            }
          })
        });
        this.$router.push({name:'DefineOrder' ,params:{goodslist}})
      },
      allCheckHandle() {
        this.$store.commit('allCheckHandle')
      }
    }
  }
</script>

<style scoped>

</style>
