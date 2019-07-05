<template>
  <div class="mine-cell">
    <div class="rel-container" id="mineFav">
      <router-link
        tag="div"
        :to="{name:'MyAttention'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">{{browseInfo.collectProduct}}</span>
        </div>
        <span class="assets-item-key">商品收藏</span>
      </router-link>
      <router-link
        tag="div"
        :to="{name:'MyAttention'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">{{browseInfo.collectShop}}</span>
        </div>
        <span class="assets-item-key">店铺收藏</span>
      </router-link>
      <div class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">{{browseInfo.footprint}}</span>
        </div>
        <span class="assets-item-key">我的足迹</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineAssetsCell",
    props: {
      browseInfo: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>
