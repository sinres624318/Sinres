<template>
  <div class="exhibition-item exhibition-item-three">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-three">
      <div class="exhibition-three-one">
        <div class="exhibition-three-one-l" v-for="(item,index) in indexThrees.yard.contenttop" :key="index">
          <div class="exhibition-three-one-title">
            <span>{{item.contentTitle}}</span>
            <p>{{item.contentDescribe}}</p>
          </div>
          <div class="exhibition-three-one-con">
            <a href="" v-for="items in item.imgs" :key="items">
              <img v-if="items" :src="items" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="exhibition-three-two exhibition-con-item">
        <div class="exhibition-con-item">
          <a href="" v-for="(itemse,index) in indexThrees.yard.contentbottom" :key="index">
            <div class="exhibition-title">
              <strong>{{itemse.contentTitle}}</strong>
              <p>{{itemse.contentDescribe}}</p>
            </div>
            <img v-if="itemse.type_img" :src="itemse.type_img" alt="">
          </a>
        </div>
      </div>
    </div>
    <div  class="exhibition-three-bottom">
      <div  class="exhibition-three-bottom-top">
        <img src="../../../static/img/index/1.png">
      </div>
      <div class="exhibition-three-bottom-center">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in newp" :key="item">
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="swiper-pagination"></div>
      </div>
      <div class="exhibition-three-bottom-bottom"><p>更多</p></div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper/dist/js/swiper.min"
  import 'swiper/dist/css/swiper.min.css'
    export default {
        name: "indexThree",
      data(){
          return{
            newp:[
              {
                title:'1'
              },
              {
                title:'2'
              },
              {
                title:'3'
              },
              {
                title:'4'
              },
              {
                title:'5'
              },
              {
                title:'6'
              }
            ]
          }
      },
      mounted() {
        var mySwiper = new Swiper('.exhibition-three-bottom-center', {
          autoplay: true,//等同于以下设置
          direction:'vertical',
          Observer: true,
          loop: true,
        });
      },
      props:{
        indexThrees:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
