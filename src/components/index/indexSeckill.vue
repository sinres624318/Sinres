<template>
  <div class="indexSeckill-wrap">
    <div class="seckill">
      <div class="seckill-content">
        <div class="seckill-title">
          <a href="">
            <div class="seckill-title-text"></div>
            <strong>18点场</strong>
            <div class="seckill_time">
              <div class="seckill_h">01</div>
              <span>:</span>
              <div class="seckill_m">12</div>
              <span>:</span>
              <div class="seckill_s">58</div>
            </div>
          </a>
          <a href="" class="more-seckill-wrap">
            <span>更多秒杀</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="more-seckill"></i>
          </a>
        </div>
      </div>
      <div class="seckill-content">
        <div class="seckill-list">
          <router-link tag="div" to="" class="seckill-item"  v-for="(item,index) in seckillContext" :key="index">
            <div class="seckill-item-img">
              <a href="">
                <img :src="item.img" alt="">
              </a>
            </div>
            <div class="seckill-item-price">
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
        name: "indexSeckill",
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
      }

    }
</script>

<style scoped>

</style>
