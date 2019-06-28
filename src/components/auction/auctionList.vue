<template>
    <div class="auction-list">
      <div class="auction-item" v-for="(item,index) in auction">
        <div class="auction-item-img">
          <img :src="item.img">
        </div>
        <div class="auction-item-info">
          <div class="auction-item-info-title">{{item.title}}</div>
          <div class="auction-item-info-quantity">{{item.clickCount}}次出价</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "auctionList",
        data(){
          return{
            auction:[
              {
                img:"./../../../static/img/auction/auctionImg-01.png",
                title:"美酒一壶伴花香名酒专场",
                clickCount:9
              },
              {
                img:"./../../../static/img/auction/auctionImg-02.png",
                title:"尚善琥珀蜜蜡臻品捡漏专场",
                clickCount:10
              },
              {
                img:"./../../../static/img/auction/auctionImg-03.png",
                title:"原产地直供和田玉捡漏专场",
                clickCount:10
              },{
                img:"./../../../static/img/auction/auctionImg-04.png",
                title:"名家精品传统水墨收藏专场",
                clickCount:38
              }

            ]
          }
        }
    }
</script>

<style scoped>

</style>
