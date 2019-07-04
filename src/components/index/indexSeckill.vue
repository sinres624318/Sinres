<template>
  <div class="indexSeckill-wrap">
    <!-- 深夜有故事GIF图 -->
    <div class="indexSeckill-wrap-img">
      <img :src="ad">
    </div>
    
    <div class="seckill">
      <div class="seckill-content">
        <div class="seckill-title">
          <a href>
            <div class="seckill-title-text"></div>
            <strong>18点场</strong>
            <div class="seckill_time">
              <div class="seckill_h">{{this.hr}}</div>
              <span>:</span>
              <div class="seckill_m">{{this.min}}</div>
              <span>:</span>
              <div class="seckill_s">{{this.sec}}</div>
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
            v-for="(item,index) in seckill.seckillContext"
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
  data(){
    return {
      hr:0,
      min:0,
      sec:0,
      day:0,
      seckill: {
        "time": "直接是几点几分几秒",
        seckillContext: [
          //十个对象
          {
            "img": "../../../static/img/seckill/1.png",
            "seckillPrice": "79",
            "originalPrice": "99"
          },
          {
            "img": "../../../static/img/seckill/2.png",
            "seckillPrice": "28.9",
            "originalPrice": "33.9"
          },
          {
            "img": "../../../static/img/seckill/3.png",
            "seckillPrice": "499",
            "originalPrice": "599"
          },
          {
            "img": "../../../static/img/seckill/4.png",
            "seckillPrice": "499",
            "originalPrice": "799"
          },
          {
            "img": "../../../static/img/seckill/5.png",
            "seckillPrice": "139",
            "originalPrice": "159"
          },
          {
            "img": "../../../static/img/seckill/6.png",
            "seckillPrice": "69",
            "originalPrice": "79"
          },
          {
            "img": "../../../static/img/seckill/7.png",
            "seckillPrice": "96",
            "originalPrice": "259"
          },
          {
            "img": "../../../static/img/seckill/8.png",
            "seckillPrice": "11",
            "originalPrice": "33.8"
          },
          {
            "img": "../../../static/img/seckill/9.png",
            "seckillPrice": "99",
            "originalPrice": "149"
          },
          {
            "img": "../../../static/img/seckill/10.png",
            "seckillPrice": "1499",
            "originalPrice": "1999"
          }

        ]
      },
    }
  },
  mounted: function () {
    this.countdown()
  },
  methods: {
    countdown: function () {
      const end = Date.parse(new Date('2019-07-30'))
      const now = Date.parse(new Date())
      const msec = end - now
      let day = parseInt(msec / 1000 / 60 / 60 / 24)
      let hr = parseInt(msec / 1000 / 60 / 60 % 24)
      let min = parseInt(msec / 1000 / 60 % 60)
      let sec = parseInt(msec / 1000 % 60)
      this.day = day
      this.hr = hr > 9 ? hr : '0' + hr
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
      setTimeout(function () {
        that.countdown()
      }, 1000)
    }
  },
  props:{
    ad:{
      type:String,
      required:true
    }
  }
  }
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
