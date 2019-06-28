<template>
  <div class="appliance-week-item-warp">
    <div class="appliance-week-item" v-for="(item,index) in weekHot">
      <div class="appliance-week-rank">{{item.ranking}}</div>
      <div class="appliance-week-item-img">
        <img :src="item.img">
      </div>
      <div class="appliance-week-item-main">
        <div class="appliance-week-item-main-describe">{{item.describe}}</div>
        <span>￥{{item.price}}</span>
      </div>
      <i class="iconfont">&#xe664;</i>
    </div>

  </div>
</template>

<script>
    export default {
        name: "applianceWeekItem",
      data(){
        return{
          weekHot:[
            {
              ranking:"1",
              img:"./../../../static/applianceImg/applianceWeekItemImg-01.png",
              describe:"美的(Midea) M1-L213B 快捷微波炉 360°转盘加热 旋钮操控 精准控温",
              price:309
            },
            {
              ranking:"2",
              img:"./../../../static/applianceImg/applianceWeekItemImg-02.png",
              describe:"美的(Midea) M1-L213B 快捷微波炉 360°转盘加热 旋钮操控 精准控温",
              price:309
            },
            {
              ranking:"3",
              img:"./../../../static/applianceImg/applianceWeekItemImg-03.png",
              describe:"美的(Midea) M1-L213B 快捷微波炉 360°转盘加热 旋钮操控 精准控温",
              price:309
            },
            {
              ranking:"4",
              img:"./../../../static/applianceImg/applianceWeekItemImg-04.png",
              describe:"美的(Midea) M1-L213B 快捷微波炉 360°转盘加热 旋钮操控 精准控温",
              price:309
            },
            {
              ranking:"5",
              img:"./../../../static/applianceImg/applianceWeekItemImg-05.png",
              describe:"美的(Midea) M1-L213B 快捷微波炉 360°转盘加热 旋钮操控 精准控温",
              price:309
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
