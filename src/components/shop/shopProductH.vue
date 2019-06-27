<template>
  <div>
    <div v-for="(item,index) in productList" :key="index" class="allProductItem">
      <a href="#">
        <div class="productTtemPic">
          <img :src="item.img" alt>
        </div>
        <div class="productItemRight">
          <p>{{item.tit}}</p>
          <div class="pic">
            <em>￥</em>
            <span>{{item.pic}}</span>
          </div>
          <div class="evaluate">
            <div class="evalute_left">
              <span>{{item.evaluate}}</span>评价
              <span>{{item.rate}}</span>好评
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  neme: "shopProductH",
  data() {
    return {
      productList: [
        {
          productID: "1",
          img: "./../../../static/img/shop/allProductPic410x410.png",
          tit:
            "联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD",
          pic: "5999.00",
          evaluate: "5888",
          rate: "98%"
        },
        {
          productID: "2",
          img: "./../../../static/img/shop/allProductPic410x410.png",
          tit:
            "联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD",
          pic: "5999.00",
          evaluate: "5888",
          rate: "98%"
        },
      ]
    };
  }
};
</script>
<style scoped>
.allProductItem > a {
  display: flex;
}
.allProductItem .productTtemPic > img {
  width: 240px;
  height: 240px;
}
.allProductItem .productItemRight {
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
}
.allProductItem .productItemRight > p {
  font-size: 28px;
  height: 72px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  color: black;
  -webkit-box-orient: vertical;
}
.allProductItem .productItemRight .pic {
  font-size: 30px;
  color: #f02b16;
  margin-top: 55px;
  font-weight: 600;
}
.allProductItem .productItemRight .evaluate {
  margin-top: 20px;
  font-size: 22px;
}
</style>
