<template>
    <div class="appliance-brand">
      <ApplianceAd></ApplianceAd>
      <div class="appliance-brand-list">
        <div class="appliance-brand-item" v-for="(item,index) in brand">
          <h3>{{item.title}}</h3>
          <h4>{{item.describe}}</h4>
          <div class="appliance-brand-item-img">
            <img :src="item.img">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ApplianceAd from './applianceAd'

  export default {
        name: "applianceBrand",
    data(){
          return{
            brand:[
              {
                title:"大牌特惠",
                describe:"口碑爆品直降千元",
                img:"./../../../static/applianceImg/applianceBrandItemImg-01.png"
              },
              {
                title:"大牌上新啦",
                describe:'"新"动之选',
                img:"./../../../static/applianceImg/applianceBrandItemImg-02.png"
              },
              {
                title:"热门好店",
                describe:"大家都在逛",
                img:"./../../../static/applianceImg/applianceBrandItemImg-03.png"
              }
            ]
          }
    },
    components:{
      ApplianceAd
    }
    }
</script>

<style scoped>

</style>
