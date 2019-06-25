<template>
  <div class="exhibition-item exhibition-item-four">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-four">
      <div class="exhibition-four-one exhibition-con-item">
        <div class="exhibition-con-item">
          <a href="" v-for="item in exhibitionconitem1">
            <div class="exhibition-title">
              <strong>{{item.text1}}</strong>
              <p>{{item.text2}}</p>
            </div>
            <img :src="item.Img" alt="">
          </a>
        </div>
      </div>
      <div class="exhibition-four-two exhibition-con-item">
        <div class="exhibition-con-item">
          <a href="" v-for="item in exhibitionconitem2">
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
        name: "indexFour",
      data(){
        return{
          exhibitionconitem1:[
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
          ],
          exhibitionconitem2:[
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
