<template>
    <div class="appliance-hot">
      <div class="appliance-hot-logo">
        <img :src="applianceHotLogoImg">
      </div>
      <div class="appliance-hot-list">
        <div class="appliance-hot-item" v-for="(item,index) in guessLike">
          <div class="appliance-hot-item-img">
            <img :src="item.img">
          </div>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applianceHot",
        data(){
          return{
            applianceHotLogoImg:"./../../../static/applianceImg/applianceHot-01.png",
            guessLike:[
              {
                img:"./../../../static/applianceImg/applianceHot-01.jpg",
                price:1698
              },
              {
                img:"./../../../static/applianceImg/applianceHot-02.jpg",
                price:399
              },
              {
                img:"./../../../static/applianceImg/applianceHot-03.jpg",
                price:85
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
