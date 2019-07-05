<template>
  <div class="recommend-content">
    <div class="recommend-item"  @click="shopHandel(item.productID)" v-for="(item,index) in product_list" :key="index">
      <a class="recommend-items">
        <div class="similar-product">
          <div class="similar-posre">
            <img :src="item.img" alt="">
          </div>
          <div class="similar-product-text">{{item.title}}</div>
          <div class="similar-product-info">
            <div class="similar-product-price">
              <div>
              <i>￥</i>
              <span>{{item.price}}</span></div>
              <p>看相似</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "muAttentionBottom",
      data(){
          return{
            product_list: [{
              "img": "../../../static/img/classify/5.png",
              "title": "华为HUAWEI Mate 20Pro麒麟980芯片全面屏超微距影像超大广角徕卡三摄6GB+128GB亮黑色全网通版双4G手机",
              "price": "4890",
              "productType": "手机",
              "productID": "01",
            },
              {
                "img": "../../../static/img/classify/2.png",
                "title": "黑科技MAUS薯片蓝牙鼠标无线苹果笔记本台式电脑家用办公便携 蓝色键鼠套装",
                "price": "1066",
                "productType": "电脑",
                "productID": "01",
              },
              {
                "img": "../../../static/img/classify/6.png",
                "title": "秃秀 短袖T恤女2019夏季新款纯色V领打底衫女短袖薄款上衣百搭修身大码弹力冰丝T恤女 白色 M ",
                "price": "118",
                "productType": "女装",
                "productID": "01",
              },
              {
                "img": "../../../static/img/classify/7.png",
                "title": "浴室置物架卫生间三角置物架 收纳架 洗濑台置物架转角架 白色樱花B款 60*22*22  ",
                "price": "89",
                "productType": "物架",
                "productID": "01",
              }
            ],
          }
      }
    }
</script>

<style scoped>

</style>
