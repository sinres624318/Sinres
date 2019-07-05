<template>
  <div class="exhibition-item exhibition-item-four">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-four">
      <div class="exhibition-four-one exhibition-con-item">
        <div class="exhibition-con-item">
            <a href="" v-for="item in exhibitionconitem">
              <div class="exhibition-title">
                <strong>{{item.text1}}</strong>
                <p>{{item.text2}}</p>
              </div>
              <img v-if="item.Img" :src="item.Img" alt="">
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexFour",
      data(){
          return{
            exhibitionconitem: [{
              //每日一逛
              "text1": '免息星球',
              "text2": '白条免息购',
              "Img": "../../../static/img/exhibition/one/5.png"
            },
              {
                //每日一逛
                "text1": '闪购',
                "text2": '品牌特卖',
                "Img": "../../../static/img/exhibition/one/6.png"
              },
              {
                //每日一逛
                "text1": '品牌秒杀',
                "text2": '低价抢大牌',
                "Img": "../../../static/img/exhibition/one/7.png"
              },
              {
                //每日一逛
                "text1": '信锐直播',
                "text2": '边看边买',
                "Img": "../../../static/img/exhibition/one/8.png"
              },
              {
                //每日一逛
                "text1": '排行榜',
                "text2": '热销推荐',
                "Img": "../../../static/img/exhibition/one/9.png"
              },
              {
                //每日一逛
                "text1": '拍拍好物',
                "text2": 'iphone 5折起',
                "Img": "../../../static/img/exhibition/one/10.png"
              },
              {
                //每日一逛
                "text1": '新品首发',
                "text2": 'vivo X27',
                "Img": "../../../static/img/exhibition/one/11.png"
              },
              {
                //每日一逛
                "text1": '发现好货',
                "text2": '教你买买',
                "Img": "../../../static/img/exhibition/one/12.png"
              }
            ],
          }
      }
    }
</script>

<style scoped>

</style>
