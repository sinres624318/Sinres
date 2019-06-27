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
          <router-link tag="div" to="" class="groupBuyData-item"  v-for="(item,index) in seckillContext" :key="index">
            <div class="groupBuyData-item-img">
              <a href="">
                <img :src="item.img" alt="">
              </a>
            </div>
            <div class="groupBuyData-item-price">
                            <span class="now-price">
                                <i>￥</i>
                                <span>{{item.seckillPrice}}</span>
                            </span>
              <span class="old-price">
                                <i>￥</i>
                                <span>{{item.originalPrice}}</span>
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
      data(){
        return{
          seckillContext:[
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            },
            {
              img:"../../../static/img/seckill/seckill_1.jpg",
              seckillPrice:'219' ,
              originalPrice:'399'
            }
          ]
        }
      },
          mounted() {
        }
  }
</script>

<style scoped>

</style>
