<template>
    <div class="appliance-recommended-welfare">
      <div class="appliance-recommended" v-for="recommend in welfare.recommended" :key="index">
        <img :src="welfare.recommended">
      </div>
      <div class="appliance-welfare">
        <div class="appliance-welfare-top">
          <div class="appliance-welfare-top-img">
            <img src="./../../../static/applianceImg/applianceWelfareImg.jpg">
          </div>
          <p>爆款限时秒杀</p>
        </div>
        <div class="appliance-welfare-deep">
          <div class="appliance-welfare-deep-item" v-for="(item,index) in welfare.welfare" :key="index">
            <h3>{{item.title}}</h3>
            <h4>{{item.describe}}</h4>
            <div class="appliance-welfare-deep-item-img">
              <img :src="item.img">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applianceRecommendedWelfare",
      props:{
        welfare:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
