<template>
  <div class="groupBuysLider-Wrap">
    <div class="groupBuyTopBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in groupBuyBanner.banner" :key="index">
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
    name: "groupBuyBanner",
    updated() {
      var mySwiper = new Swiper('.groupBuyTopBanner', {
        autoplay:true,//等同于以下设置
        observer:true,
        loop:true,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    },
    props:{
      groupBuyBanner:{
        type:Object,
        required:true
      }
    }

  }
</script>

<style scoped>

</style>
