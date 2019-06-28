<template>
  <div class="indexSeckill-wrap">
    <!-- 深夜有故事GIF图 -->
    <div class="indexSeckill-wrap-img">
      <img src="../../../static/img/1.png">
    </div>
    
    <div class="seckill">
      <div class="seckill-content">
        <div class="seckill-title">
          <a href>
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
          <a href class="more-seckill-wrap">
            <span>更多秒杀</span>
            <i class="more-seckill"></i>
          </a>
        </div>
      </div>
      <div class="seckill-content">
        <div class="seckill-list">
          <router-link
            tag="div"
            to
            class="seckill-item"
            v-for="(item,index) in seckillContext"
            :key="index"
          >
          <a href="#">
            <div class="seckill-item-img">
                <img :src="item.img" alt='秒杀商品'>
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
          </a>
            
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexSeckill",
  data() {
    return {
      seckillContext: [
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        },
        {
          img: "../../../static/img/seckill/seckill-product-1.png",
          seckillPrice: "219",
          originalPrice: "399"
        }
      ]
    };
  }
};
</script>

<style scoped>
.indexSeckill-wrap{
  margin-top: 10px;
}
.indexSeckill-wrap-img{
  margin-top:10px;
  margin-bottom:10px;
}
.seckill{
  margin: 20px;
  background: #fff;
  border-radius: 15px;
  padding:10px;
}
.seckill-title {
  height: 68px;
  background: url("./../../../static/img/seckill/seckill.png") no-repeat;
  background-size: 100%;
  display: flex;
  justify-content: space-between;
}

.seckill-title a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.seckill-title strong {
    font-size: 24px;
    color: #232326;
    font-weight: 600;
    display: inline-block;
}

.seckill-title .seckill-title-text {
  height: 54px;
  width: 138px;
  margin-right: 6px;
  margin-left: 9px;
  margin-top: 8px;
  background: url("./../../../static/img/seckill/seckill_title.png") no-repeat;
  background-size: 100%;
}

.seckill_time {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}
.seckill_time>div{
  width: 36px;
    line-height: 34px;
    color: #232326;
    font-size: 24px;
    position: relative;
    text-align: center;
    border: 2px solid #dfdfdf;
}
.more-seckill-wrap{
   
    color: #e43130;
    font-size: 20px;
    padding-right: 22px;
}

.more-seckill{
 background: url("./../../../static/img/seckill/more.png");
   background-size: contain;
  width: 21px;
  height: 21px;
  background-size: cover;
  margin-right: 10px;
  margin-left: 10px;
}
/* ----------秒杀产品----------- */
.seckill-content {
}
.seckill-list {
  display: flex;
  overflow-x: auto;
  border-radius: px;
}
.seckill-list::-webkit-scrollbar {
  display: none;
}
.seckill-item {
  width: 152px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.seckill-item-img img {
  width: 132px;
  height: 132px;
}

.seckill-item-price {
  display: flex;
  width: 100%;
  flex-direction: column;
  font-size: 12px;
  align-items: center;
}

.now-price {
  color: #e93b3d;
  font-weight: 700;
  margin-top: 15px;
}

.now-price>i {
  font-size: 17px;
  align-self: flex-end;
}

.now-price>span {
  font-size: 26px;
  align-self: flex-end;
}

.old-price {
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #999;
  text-decoration: line-through;
  margin-top: 10px;
} 
</style>
