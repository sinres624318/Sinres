<template>
  <div class="groupBuy-Class">
    <p>
      <span>拼购</span>
      <span>大家都在拼</span>
    </p>
    <div class="roupBuy-content">
      <div class="roupBuy-item">
        <div class="aaa" v-for="item in recommenditem">
          <div class="roupBuy-product">
            <div class="roupBuy-posre">
              <img :src="item.Img" alt="">
            </div>
            <div class="roupBuy-product-text">{{item.text1}}</div>
            <div class="roupBuy-product-info">
              <div class="roupBuy-product-price">
                <i>&yen;</i>
                <span>{{item.text2}}</span>
              </div>
              <div class="roupBuy-similarity">看相似</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "groupBuyClass",
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
