<template>
  <div class="indexsearch-wrap">
    <div class="indexsearch"  :class="{indexwrap:info>scroll}" >
      <div class="indexmenu">
        <i class="iconfont">&#xe62c;</i>
      </div>
      <router-link class="indexsearch-form" tag="div" to="/search">
        <i class="search-logo"></i>
        <i class="search-zoom"></i>
        <input type="text" placeholder="汽车香水" readonly="readonly" >
      </router-link>
      <div class="indexlogin">
        <router-link to="/login" >登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexHender",
      data(){
          return{
            scroll:0
          }
      },
      props:['info']

    }



</script>

<style scoped>

</style>
