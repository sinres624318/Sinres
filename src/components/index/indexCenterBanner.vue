<template>
  <div class="indexClassify-wrap">
    <div class="indexClassify">
      <div class="swiper-wrapper">
        <div class="classify-l swiper-slide">
          <router-link tag="a"  :to="item.path" v-for="(item,index) in indexClassifyl" :key="index">
            <img :src="item.img" alt="">
            <span>{{item.text}}</span>
          </router-link>
        </div>
        <div class="classify-r swiper-slide">
          <router-link tag="a" to="" href="" v-for="(item,index) in indexClassifyr" :key="index">
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
            indexClassifyl:[
              {
                img:'../../../static/img/classify/1.png',
                text:'家电',
               path: '/appliance'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'充值',
                path: '/recharge'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'拍卖',
                path: '/auction'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'拍拍',
                path: '/patPat'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'领券',
                path: '/vouchers'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'家电',
                path: '/appliance'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'家电',
                path: '/appliance'
              }
              ,
              {
                img:'../../../static/img/classify/1.png',
                text:'家电',
                path: '/appliance'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'家电',
                path: '/appliance'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'家电',
                path: '/appliance'
              }
            ],
            indexClassifyr:[
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              },
              {
                img:'../../../static/img/classify/1.png',
                text:'海囤全球'
              }
            ]
          }
      },
      mounted() {
        var mySwiper = new Swiper('.indexClassify', {
          loop:true,
          // pagination: {
          //   el: '.swiper-pagination',
          // },
        });
      }
    }
</script>

<style scoped>

</style>
