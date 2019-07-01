<template>
    <div class="auction-header">
      <div class="op auction-header-left" :class="{'auctionFocus':currentIndex == 1}" @click="handleAuctionLeft" v-if="sendauctionInfo">开拍专场</div>
      <div class="op auction-header-right" :class="{'auctionFocus':currentIndex == 2}" @click="handleAuctionRight" v-if="sendauctionInfo">专场预告</div>
    </div>
</template>

<script>
    export default {
        name: "auctionHeader",
        data(){
          return{
            currentIndex:1
          }
        },
      methods:{
        handleAuctionLeft(){
          this.currentIndex = 1;
          this.$emit("receiveInfo",this.sendauctionInfo.auction)
        },
        handleAuctionRight(){
          this.currentIndex = 2;
          this.$emit("receiveInfo",this.sendauctionInfo.auctionPrediction)
        }
      },
      props:{
        sendauctionInfo:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
