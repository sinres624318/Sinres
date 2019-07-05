<template>
  <div class="cart-product-edit-bar">
    <div class="cart-product-edit-bar-check-all">
      <span>全选</span>
      <i :class="['icon_select', allCheck ? 'selected':'']"></i>
    </div>
    <button class="cart-product-edit-bar-del-btn" @click="deleteProductHandle">删除</button>
  </div>
</template>

<script>
  import {getCookie} from './../../assets/js/common'
  export default {
    name: "cartProductEditBar",
    props: {
      allCheck: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      deleteProductHandle() {
        let productIDList = [];
        let productList = this.$store.state.cartInfo.cartShopList;
        productList.forEach((shop, shopIndex) => {
          shop.productList.forEach((product, productIndex) => {
            if (product.checked) {
              productIDList.push(product.productID)
            }
          })
        });
        this.$store.dispatch('deleteProduct', {
          "productID": productIDList,
          "token": getCookie('token')
        });
      }
    }
  }
</script>

<style scoped>

</style>
