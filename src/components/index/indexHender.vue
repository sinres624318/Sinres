<template>
  <div class="indexsearch-wrap" >
    <div class="indexsearch">
      <div class="indexmenu">
        <i class="iconfont">&#xe62c;</i>
      </div>
      <router-link class="indexsearch-form" tag="div" to="/search">
        <i class="search-logo"></i>
        <i class="search-zoom"></i>
        <input type="text" placeholder="汽车香水" readonly="readonly" >
      </router-link>
      <div class="indexlogin">
        <a href="">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexHender",
      mounted() {

      }

    }
</script>

<style scoped>


</style>
