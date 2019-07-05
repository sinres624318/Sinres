<template>
    <div class="auction-list">
      <div class="auction-item" v-for="(item,index) in sendType">
        <div class="auction-item-img">
          <img :src="item.img">
        </div>
        <div class="auction-item-info">
          <div class="auction-item-info-title">{{item.title}}</div>
          <div class="auction-item-info-quantity">{{item.clickCount}}</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "auctionList",

      props:{
        sendType:{
          type:Array,
          required:true
        }
      },
      mounted() {
          console.log(this.sendType)
      }
    }
</script>

<style scoped>

</style>
