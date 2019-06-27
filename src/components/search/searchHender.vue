<template>
  <div class="searchSearch-wrap">
    <div class="searchSearch">
      <div class="searchSmenu">
        <i class=" iconfont" @click="backClickHandle">&#xe61c;</i>
      </div>
      <div class="searchSearch-form">
        <i class="searchSearch-logo"></i>
        <i class="searchSearch-zoom"></i>
        <input type="text" placeholder="汽车香水" >
      </div>
      <div class="searchSlogin">
        <router-link tag="a" to="">搜索</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "searchHender",
      methods: {
        backClickHandle() {
          this.$router.go(-1);
        },
      }
    }
</script>

<style scoped>

</style>
