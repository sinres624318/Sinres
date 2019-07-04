<template>
  <div class="groupBuyCenter-wrap">
    <div class="groupBuyCenter">
      <div class="swiper-wrapper">
        <div class="classify-l swiper-slide">
          <router-link   to="" v-for="(item,index) in groupBuyCenterBanner.grouyBuyClassify" :key="index">
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
    props:{
      groupBuyCenterBanner:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
