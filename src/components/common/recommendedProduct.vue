<template>
  <div class="recommend-content">
    <div class="recommend-item">
      <div class="aaa" v-for="item in recommenditem">
        <div class="similar-product">
          <div class="similar-posre">
            <img :src="item.Img" alt="">
          </div>
          <div class="similar-product-text">{{item.text1}}</div>
          <div class="similar-product-info">
            <div class="similar-product-price">
              <i>&yen;</i>
              <span>{{item.text2}}</span>
            </div>
            <div class="similarity">看相似</div>
          </div>
          <div class="similar-product-info"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "recommendedProduct",
      data(){
        return{
          recommenditem:[
            {
              Img:'../../../static/img/classify/2.png',
              text1:'黑科技MAUS薯片蓝牙鼠标无线苹果笔记本台式电脑家用办公便携 蓝色键鼠套装',
              text2:'1066'
            },
            {
              Img:'../../../static/img/classify/2.png',
              text1:'黑科技MAUS薯片蓝牙鼠标无线苹果笔记本台式电脑家用办公便携 蓝色键鼠套装',
              text2:'1066'
            },
            {
              Img:'../../../static/img/classify/2.png',
              text1:'黑科技MAUS薯片蓝牙鼠标无线苹果笔记本台式电脑家用办公便携 蓝色键鼠套装',
              text2:'1066'
            }
          ]
        }
      }
    }
</script>

<style scoped>

</style>
