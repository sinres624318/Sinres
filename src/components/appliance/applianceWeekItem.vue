<template>
  <div class="appliance-week-item-warp">
    <div class="appliance-week-item" v-for="(item,index) in weekHotInfo[0]" :key="index" @click="handleSendProductID(item.productID)">
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
    },
      methods:{
        handleSendProductID(productID){
          console.log(productID)
          this.$router.push({name:'Details',params:{'productID':productID}})
        }
      }
    }
</script>

<style scoped>

</style>
