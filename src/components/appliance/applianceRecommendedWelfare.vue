<template>
    <div class="appliance-recommended-welfare">
      <div class="appliance-recommended" v-for="recommend in recommended">
        <img :src="recommend">
      </div>
      <div class="appliance-welfare">
        <div class="appliance-welfare-top">
          <div class="appliance-welfare-top-img">
            <img src="./../../../static/applianceImg/applianceWelfareImg.jpg">
          </div>
          <p>爆款限时秒杀</p>
        </div>
        <div class="appliance-welfare-deep">
          <div class="appliance-welfare-deep-item" v-for="(item,index) in welfare">
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
      data(){
          return{
            recommended:["./../../../static/applianceImg/applianceRecommended.png"],
            welfare:[
              {
                title:"智能家电",
                describe:"让生活更聪明",
                img:"./../../../static/applianceImg/applianceWelfareImg-01.jpg"
              },
              {
                title:"精锐家电",
                describe:"信锐独享好物",
                img:"./../../../static/applianceImg/applianceWelfareImg-02.png"
              }
            ],
          }
      }
    }
</script>

<style scoped>

</style>
