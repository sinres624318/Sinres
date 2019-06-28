<template>
  <div class="shop-title-wrap">
    <div class="icon_select"></div>
    <div class="shop-photo"></div>
    <div class="shop-title" v-if="title">{{title}}</div>
    <div class="notice">
      <i></i>
      <span>以免运费</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartShopTitle",
    props: {
      title: {
        type: String,
      }
    }
  }
</script>

<style scoped>

</style>
