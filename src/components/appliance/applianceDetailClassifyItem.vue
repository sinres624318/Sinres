<template>
    <div class="appliance-detail-classify-item-warp">
      <div class="appliance-detail-classify-item" v-for="(item,index) in sendApplianceClassify[0]" :key="index" @click="handleProductID(item.productID)">
        <div class="appliance-detail-classify-item-img">
          <img :src="item.img">
        </div>
        <div class="appliance-detail-classify-item-title">{{item.describes}}</div>
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
      props: {
        sendApplianceClassify: {
          type: Array,
          required: true
        }
      },
      methods:{
        handleProductID(productID){
          this.$router.push({name:'Details',params:{'productID':productID}})
        }
      }
    }
</script>

<style scoped>

</style>
