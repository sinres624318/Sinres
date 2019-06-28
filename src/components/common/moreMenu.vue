<template>
  <div class="more-menu">
    <div class="more-menu-list">
      <router-link
        tag="div"
        v-for="(item,index) in menuList"
        :to="{name:item.path}"
        class="menu-item"
        :key="index">
        <i :class="item.className"></i>
        <span>{{item.text}}</span>
      </router-link>
    </div>
    <div class="more-menu-mask"></div>
  </div>
</template>

<script>
  export default {
    name: "moreMenu",
    data() {
      return {
        menuList: [
          {
            className: 'more-menu-index',
            text: '首页',
            path: 'Index'
          },
          {
            className: 'more-menu-classify',
            text: '分类搜索',
            path: 'Classify'
          },
          {
            className: 'more-menu-cart',
            text: '购物车',
            path: 'Cart'
          },
          {
            className: 'more-menu-mine',
            text: '我的信锐',
            path: 'Mine'
          },
          {
            className: 'more-menu-footprint',
            text: '我的足迹',
            path: 'Footprint'
          },
        ]
      }
    }
  }
</script>

<style src="./../../../static/css/moreMenu.css"></style>
