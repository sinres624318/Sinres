<template>
  <div class="indexClassify-wrap">
    <div class="indexClassify">
      <div class="swiper-wrapper">
        <div class="classify-l swiper-slide">
          <router-link tag="a"  :to="item.path" v-for="(item,index) in indexCenterBanner.indexClassify1" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.text}}</span>
          </router-link>
        </div>
        <div class="classify-r swiper-slide">
          <router-link tag="a" to="" href="" v-for="(item,index) in indexCenterBanner.indexClassifyr" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.text}}</span>
          </router-link>
        </div>
      </div>
      <div class="classify-slide"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "../../../node_modules/swiper/dist/js/swiper.min"
  import '../../../node_modules/swiper/dist/css/swiper.min.css'
    export default {
        name: "indexCenterBanner",
      mounted() {
        var mySwiper = new Swiper('.indexClassify', {
          loop:true,
          Observer:true
        });
      },
      props:{
        indexCenterBanner:{
          type:Object,
          required:true
        }
      }
    }
</script>
<style scoped>

</style>
