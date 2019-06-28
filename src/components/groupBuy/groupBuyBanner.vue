<template>
  <div class="groupBuysLider-Wrap">
    <div class="groupBuyTopBanner">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banner" :key="item">
          <router-link tag="a" to="">
            <img :src="item.banner" alt="">
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
            "../../../static/img/groupBuy/baner1.png",
            "../../../static/img/groupBuy/baner2.png",
            "../../../static/img/groupBuy/baner1.png",
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
