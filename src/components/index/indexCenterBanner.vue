<template>
  <div class="indexClassify-wrap">
    <div class="indexClassify">
      <div class="swiper-wrapper">
        <div class="classify-l swiper-slide">
          <router-link tag="a"  :to="a[index]" v-for="(item,index) in indexCenterBanner[0]" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.text}}</span>
          </router-link>
        </div>
        <div class="classify-r swiper-slide">
          <router-link tag="a"  :to="b[index]" v-for="(item,index) in indexCenterBanner[1]" :key="index">
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
      data(){
        return{
          a:[
            "/auction",
            "/appliance",
            "/appliance",
            "/patPat",
            "/appliance",
            "/recharge",
            "/appliance",
            "/vouchers",
            "/appliance",
            "/appliance",
          ],
          b:[
            "/appliance",
            "/auction",
            "/appliance",
            "/patPat",
            "/appliance",
            "/recharge",
            "/appliance",
            "/patPat",
            "/appliance",
            "/appliance",
          ]
        }
      },
      mounted() {
        var mySwiper = new Swiper('.indexClassify', {
          loop:true,
          Observer:true
        });
      },
      props:{
        indexCenterBanner:{
          type:Array,
          required:true
        }
      }
    }
</script>
<style scoped>

</style>
