<template>
  <div class="appliance-week-item-warp">
    <div class="appliance-week-item" v-for="(item,index) in weekHotInfo[0]">
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
    props:{
      weekHotInfo:{
        type:Array,
          required:true
      }
    }
    }
</script>

<style scoped>

</style>
