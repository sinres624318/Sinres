<template>
  <div class="indexTools-bar">
    <div class="tools-bar-home">
      <router-link  tag="div" to="/">
        <img src="../../../static/img/bar/home_focus.png" alt="">
      </router-link>
    </div>
    <div class="tools-bar-classify">
      <router-link  tag="div" to="">
        <img src="../../../static/img/bar/classify.png" alt="">
      </router-link>
    </div>
    <div class="tools-bar-purchase">
      <router-link  tag="div" to="">
      <img src="../../../static/img/bar/purchase.png" alt="">
      </router-link>
    </div>
    <div class="tools-bar-cart">
      <router-link  tag="div" to="/cart">
      <img src="../../../static/img/bar/cart.png" alt="">
        </router-link>
    </div>
    <div class="tools-bar-mine">
      <router-link  tag="div" to="/mine">
        <img src="../../../static/img/bar/mine.png" alt="">
        </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "toolsBar"
    }
</script>

<style scoped>

</style>
