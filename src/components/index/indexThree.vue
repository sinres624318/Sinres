<template>
  <div class="exhibition-item exhibition-item-three">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-three">
      <div class="exhibition-three-one">
        <div class="exhibition-three-one-l">
          <div class="exhibition-three-one-title">
            <span>组装电脑</span>
            <p>DIY你的台式电脑</p>
          </div>
          <div class="exhibition-three-one-con">
            <a href="">
              <img src="../../../static/img/exhibition/one/exhibition_con_three_1.jpg" alt="">
            </a>
            <a href="">
              <img src="../../../static/img/exhibition/one/exhibition_con_three_2.jpg" alt="">
            </a>
          </div>
        </div>
        <div class="exhibition-three-one-r">
          <div class="exhibition-three-one-title">
            <span>宅家必选</span>
            <p>首选舒适</p>
          </div>
          <div class="exhibition-three-one-con">
            <a href="">
              <img src="../../../static/img/exhibition/one/exhibition_con_three_3.jpg" alt="">
            </a>
            <a href="">
              <img src="../../../static/img/exhibition/one/exhibition_con_three_4.jpg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="exhibition-three-two exhibition-con-item">
        <div class="exhibition-con-item">
          <a href="" v-for="item in exhibitionconitem">
            <div class="exhibition-title">
              <strong>{{item.text1}}</strong>
              <p>{{item.text2}}</p>
            </div>
            <img :src="item.Img" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexThree",
      data(){
          return{
            exhibitionconitem:[
              {
                text1:'吃货礼包',
                text2:'嘴巴很寂寞',
                Img:"../../../static/img/exhibition/one/exhibition_con_three_2.jpg"
              },
              {
                text1:'吃货礼包',
                text2:'嘴巴很寂寞',
                Img:"../../../static/img/exhibition/one/exhibition_con_three_2.jpg"
              },
              {
                text1:'吃货礼包',
                text2:'嘴巴很寂寞',
                Img:"../../../static/img/exhibition/one/exhibition_con_three_2.jpg"
              },
              {
                text1:'吃货礼包',
                text2:'嘴巴很寂寞',
                Img:"../../../static/img/exhibition/one/exhibition_con_three_2.jpg"
              },
            ]
          }
      }
    }
</script>

<style scoped>

</style>
