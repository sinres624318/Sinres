<template>
  <div class="groupBuysLider-Wrap">
    <div class="groupBuyTopBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" :key="item">
          <router-link tag="a">
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
        name: "groupBuyBanner",
      data(){
        return{
          banner:[
            "../../../static/img/banner/banner_1.jpg",
            "../../../static/img/banner/banner_2.jpg",
            "../../../static/img/banner/banner_3.jpg",
          ]
        }
      },
      mounted() {
        var mySwiper = new Swiper('.groupBuyTopBanner', {
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
