<template>
  <div class="appliance-week-item-warp">
    <div class="appliance-week-item" v-for="(item,index) in weekHotInfo[0]" :key="index">
      <div class="appliance-week-rank">{{index+1}}</div>
      <div class="appliance-week-item-img">
        <img :src="item.img">
      </div>
      <div class="appliance-week-item-main">
        <div class="appliance-week-item-main-describe">{{item.describes}}</div>
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
