<template>
  <div class="appliance-swiper-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner.banner" :key="index"><img :src="item"></div>
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

          }
        },
      mounted() {
        var mySwiper = new Swiper('.swiper-container', {
          slidesPerView: "auto",
           spaceBetween: 10,
          effect:"coverflow",
          centeredSlides: true,
          direction:'horizontal',
          autoplay:{
            delay:2000
          },
           loop:"true",
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      },
      props:{
          banner:{
            type:Object,
            required:true
          }
      }
    }
</script>

<style scoped>


</style>
