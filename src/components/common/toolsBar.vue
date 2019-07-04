<template>
  <div class="indexTools-bar">
    <div class="tools-bar-home">
      <router-link tag="div" :to="{name:'Index'}"></router-link>
    </div>
    <div class="tools-bar-classify">
      <router-link tag="div" :to="{name:'Classify'}"></router-link>
    </div>
    <div class="tools-bar-purchase">
      <router-link tag="div" :to="{name:'GroupBuy'}"></router-link>
    </div>
    <div class="tools-bar-cart">
      <router-link tag="div" :to="{name:'Cart'}"></router-link>
    </div>
    <div class="tools-bar-mine">
      <router-link tag="div" :to="{name:'Mine'}"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "toolsBar",
    data() {
      return {}
    }
  };
</script>

<style scoped>
  /*底部*/
  /*toolsBar start*/
  .indexTools-bar {
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: #fff;
    z-index: 9999999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 20px 0 hsla(0, 6%, 58%, 0.6);
  }

  .indexTools-bar > div {
    width: 20%;
    text-align: center;
    height: 100%;
  }

  .indexTools-bar > div > div {
    width: 100%;
    height: 100%;
  }

  /*toolsBar end*/

  .tools-bar-home > div {
    background: url('./../../../static/img/bar/home.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-home .focus {
    background: url('./../../../static/img/bar/home_focus.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-classify > div {
    background: url('./../../../static/img/bar/classify.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-classify .focus {
    background: url('./../../../static/img/bar/classify_focus.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-mine > div {
    background: url('./../../../static/img/bar/mine.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-mine .focus {
    background: url('./../../../static/img/bar/mine_focus.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-cart > div {
    background: url('./../../../static/img/bar/cart.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

  .tools-bar-purchase > div {
    background: url('./../../../static/img/bar/purchase.png') no-repeat;
    background-size: 120px 92px;
    background-position: center;
  }

</style>
