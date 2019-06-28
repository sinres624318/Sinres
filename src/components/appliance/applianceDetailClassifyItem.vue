<template>
    <div class="appliance-detail-classify-item-warp">
      <div class="appliance-detail-classify-item" v-for="(item,index) in television">
        <div class="appliance-detail-classify-item-img">
          <img :src="item.img">
        </div>
        <div class="appliance-detail-classify-item-title">{{item.describe}}</div>
        <div class="appliance-detail-classify-item-price">
          <i>￥{{item.seckillPrice}}</i>
          <span>￥{{item.originalPrice}}</span>
        </div>
        <i class="iconfont">&#xe664;</i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applianceDetailClassifyItem",
        data(){
          return{
            television:[
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-01.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-02.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-01.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-02.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-01.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-02.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-01.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-02.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-01.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              },
              {
                img:"./../../../static/applianceImg/applianceDetailClassifyItem-02.png",
                describe:"美的 (Midea) 电磁炉触控按键 黑色面板 八面玲珑 炫酷",
                seckillPrice:188,
                originalPrice:199
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
