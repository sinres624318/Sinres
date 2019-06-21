<template>
  <div id="app">
    <GoodsAction>
      <GoodsActionIcon
        icon="chat-o"
        text="客服"
        @click="onClickIcon"
      />
      <GoodsActionButton
        icon="cart-o"
        text="购物车"
        @click="onClickIcon"
      />
      <GoodsActionButton
        type="warning"
        text="加入购物车"
        @click="onClickButton"
      />
      <GoodsActionButton
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </GoodsAction>
  </div>
</template>

<script>
  import {
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton
  } from 'vant';


  export default {
    name: 'App',
    components:{
      GoodsAction,
      GoodsActionIcon,
      GoodsActionButton,
    },
    methods: {
      onClickIcon() {
        Toast('点击图标');
      },
      onClickButton() {
        Toast('点击按钮');
      }
    }
  }
</script>

<style>
  #app {
    height: 50px;
  }
</style>
