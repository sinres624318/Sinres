<template>
  <div class="appliance-swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner"><img :src="item"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import './../../../node_modules/swiper/dist/css/swiper.min.css'
  import Swiper from './../../../node_modules/swiper/dist/js/swiper.min'
    export default {
        name: "applianceSwiper",
        data(){
          return{
            banner:[
              "./../../../static/applianceImg/applianceImg01.jpg",
              "./../../../static/applianceImg/applianceImg02.jpg",
              "./../../../static/applianceImg/applianceImg03.jpg",
              "./../../../static/applianceImg/applianceImg04.jpg",
              "./../../../static/applianceImg/applianceImg05.jpg",
              "./../../../static/applianceImg/applianceImg06.jpg",
              "./../../../static/applianceImg/applianceImg07.jpg",
              "./../../../static/applianceImg/applianceImg08.jpg"
            ]
          }
        },
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          slidesPerView: "auto",
           spaceBetween: 10,
          effect:"coverflow",
          centeredSlides: true,
          // direction:'horizontal',
          autoplay:{
            delay:3000
          },
           loop:"true",
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });

      }
    }
</script>

<style scoped>


</style>
