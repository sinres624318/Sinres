<template>
  <div class="details_slideshow">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item,index) in banner"
        :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  // 引入
  import {Swipe, SwipeItem} from 'vant';

  export default {

    name: 'DetailsSlideshow',
    components: {
      'van-swipe': Swipe,
      'van-swipe-item': SwipeItem

    },
    data() {


      return {
        banner: [
          "../../../static/img/Details/details_banner.jpg",
          "../../../static/img/Details/details_banner.jpg",
          "../../../static/img/Details/details_banner.jpg",
          "../../../static/img/Details/details_banner.jpg"
        ]

      }


    },


  }
</script>

<style scoped>

</style>
