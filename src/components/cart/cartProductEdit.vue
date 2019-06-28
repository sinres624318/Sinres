<template>
  <div class="cart-product-edit">
    <div class="receive-address">
      <i class="iconfont">&#xe606;</i>
      <span>西安市未央区</span>
    </div>
    <div class="product-edit" @click="changeProductHandle">{{flag?'编辑商品':'完成'}}</div>
  </div>
</template>

<script>
  export default {
    name: "cartProductEdit",
    data() {
      return {
        flag:true
      }
    },
    methods: {
      changeProductHandle() {
        this.$emit('changeProductHandle');
        this.flag = !this.flag
      }
    }
  }
</script>

<style scoped>

</style>
