<template>
  <div class="shop-product-item">
    <div
      v-if="product.productID"
      :class="[product.checked?'checked':'','product-item-goods']">
      <div
        @click="checkProductHandle"
        class="icon_select"></div>
      <img :src="product.img" alt="">
      <div class="goods-content">
        <div class="name">
          <span class="proNameJs">{{product.goodsdescribe}}</span>
        </div>
        <p class="sku">{{product.model}}</p>
        <div class="goods_line">
          <p class="price">
                <span class="priceJs">
                    <i>&yen;</i>
                    <em class="int">{{product.price.substring(0,product.price.indexOf('.'))}}</em>
                    <i>.{{product.price.substring(product.price.indexOf('.')+1)}}</i>
                </span>
          </p>
          <div class="num_and_more">
            <div class="num_wrap">
              <span class="minus disabled" @click="minusClickHandle">-</span>
              <div class="input_wrap">
                <input class="num" type="tel" :value="product.productNum" max="200">
              </div>
              <span class="plus" @click="addClickHandle">+</span>
            </div>
          </div>
        </div>
        <div class="goods_sub_line">
          <span class="m_action_item">移入关注</span>
          <span class="m_action_item" @click="deleteProductHandle">删除</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCookie} from './../../assets/js/common.js'

  export default {
    name: "cartShopProduct",
    props: {
      product: {
        type: Object,
        required: true
      },
      sID: {
        type: Number,
        required: true
      },
      pID: {
        type: Number,
        required: true
      }
    },
    methods: {
      deleteProductHandle(){
        console.log(this.product.productID);
        this.$store.dispatch('deleteProduct', {
          "productID": [this.product.productID],
          "token": getCookie('token')
        });
      },
      addClickHandle() {
        this.$store.dispatch('addProduct', {
          "sID": this.sID,
          "pID": this.pID,
          "token": getCookie('token')
        });
      },
      minusClickHandle() {
        this.$store.dispatch('minusProduct', {
          "sID": this.sID,
          "pID": this.pID,
          "token": getCookie('token')
        });
      },
      checkProductHandle() {
        this.$store.commit('productCheckHandle', {sID: this.sID, pID: this.pID})
      }
    }
  }
</script>

<style scoped>

</style>
