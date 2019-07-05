<template>
  <div class="indexsLider-wrap">
    <div class="indexTopBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in indexTopBanner" :key="index">
          <router-link tag="a" to="">
            <img :src="item" alt="">
          </router-link>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from "swiper/dist/js/swiper.min"
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: "indexTopBanner",
    mounted() {
      var mySwiper = new Swiper('.indexTopBanner', {
        autoplay: true,//等同于以下设置
        Observer: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    props: {
      indexTopBanner: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
