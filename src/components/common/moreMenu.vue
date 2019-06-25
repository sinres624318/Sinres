<template>
  <div class="more-menu">
    <div class="more-menu-list">
      <div class="menu-item">
        <i class="index iconfont">&#xe790;</i>
        <span>首页</span>
      </div>
    </div>
    <div class="more-menu-mask"></div>
  </div>
</template>

<script>
  export default {
    name: "moreMenu"
  }
</script>

<style scoped>
  .more-menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  .more-menu-list {
    position: absolute;
    right: 20px;
    width: 250px;
    background: #0e0e0e;
    top: 90px;
    z-index: 9999;
  }

  .menu-item {
    color: #fff;
  }

  .more-menu-mask {
    width: 100%;
    height: 100%;
    background: transparent;
  }
  .index {

  }
</style>
