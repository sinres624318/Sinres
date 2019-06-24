<template>
  <div class="cart">
    <van-nav-bar
      class="cartHeader"
      title="购物车"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <van-icon name="arrow-left" slot="left"/>
      <van-icon name="ellipsis" slot="right"/>
    </van-nav-bar>
  </div>
</template>

<script>

  import {NavBar, Icon} from 'vant';


  export default {
    name: "cart",
    components: {
      'van-icon': Icon,
      'van-nav-bar': NavBar
    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        console.log('right')
      }
    }
  }
</script>

<style scoped>
  .cartHeader {
    height: 90px;
  }

  .van-nav-bar__left,
  .van-nav-bar__right {
    top: 50%;
    height: 100%;
    line-height: 90px;
    width: 80px;
    transform: translateY(-50%);
  }

  .van-nav-bar__title {
    height: 100%;
    line-height: 90px;
    font-size: 40px;
  }

  .van-icon-arrow-left {
    font-size: 45px;
  }

  .van-icon-ellipsis {
    font-size: 60px;
  }

  .van-icon {
    color: #666;
  }
</style>
