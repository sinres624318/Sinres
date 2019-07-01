<template>
    <div class="appliance-hot">
      <div class="appliance-hot-logo">
        <img src="./../../../static/applianceImg/applianceHot-01.png">
      </div>
      <div class="appliance-hot-list">
        <div class="appliance-hot-item" v-for="(item,index) in guessLike.guessLike">
          <div class="appliance-hot-item-img">
            <img :src="item.img">
          </div>
          <span>￥{{item.price}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applianceHot",
      props:{
        guessLike:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
