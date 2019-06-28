<template>
  <div class="indexsLider-Wrap">
    <div class="indexTopBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" :key="item">
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
      data(){
          return{
            banner:[
              "../../../static/img/banner/banner_1.jpg",
              "../../../static/img/banner/banner_2.jpg",
              "../../../static/img/banner/banner_3.jpg",
              "../../../static/img/banner/banner_4.jpg",
              "../../../static/img/banner/banner_5.jpg",
              "../../../static/img/banner/banner_6.jpg",
              "../../../static/img/banner/banner_7.jpg",
              "../../../static/img/banner/banner_8.jpg",
            ]
          }
      },
      mounted() {
        var mySwiper = new Swiper('.indexTopBanner', {
          autoplay:true,//等同于以下设置
          loop:true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }

    }
</script>

<style scoped>

</style>
