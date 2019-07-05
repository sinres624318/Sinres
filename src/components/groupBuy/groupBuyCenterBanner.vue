<template>
  <div class="groupBuyCenter-wrap">
    <div class="groupBuyCenter">
      <div class="swiper-wrapper">
        <div class="classify-l swiper-slide">
          <router-link   to="" v-for="(item,index) in groupBuyCenterl" :key="index">
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
  export default {
        name: "groupBuyCenterBanner",
    data(){
      return{
        groupBuyCenterl:[
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          },
          {
            img:'../../../static/img/groupBuy/1.webp',
            text:'一元福利',
          }
        ],
      }
    },
    mounted() {
    }
    }
</script>

<style scoped>

</style>
