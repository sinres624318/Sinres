<template>
  <div class="groupBuyData">
    <div class="groupBuyData-top">
      <div class="groupBuyData-top-top">
        <p>今日</p>
        <span>必拼</span>
      </div>
      <div class="groupBuyData-top-bottom">
        <p>更多</p>
        <i class="iconfont groupBuyData-top-bottom-iconfont">&#xe624;</i>
      </div>
    </div>
    <div  class="groupBuyData-content">
      <div class="groupBuyData-content">
        <div class="groupBuyData-list">
          <router-link tag="div" to="" class="groupBuyData-item"  v-for="(item,index) in groupBuyDay.groupBuyeveryone" :key="index">
            <div class="groupBuyData-item-img">
              <a href="">
                <img :src="item.img" alt="">
              </a>
            </div>
            <div class="groupBuyData-item-price">
                            <span class="now-price">
                                <i>￥</i>
                                <span>{{item.groupBuyPrice}}</span>
                            </span>
              <span class="old-price">
                                <i>拼</i>
                                <span>{{item.groupBuyPeople}}</span>
                            </span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "groupBuyDay",
    props:{
      groupBuyDay:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
