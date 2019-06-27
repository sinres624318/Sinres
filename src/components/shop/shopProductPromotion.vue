<template>
  <div class="productPromotion">
    <a href="#" v-for="(item,index) in productList" :key="index">
      <img :src="item.img">
      <div class="shopListItemLeft">
        <p>{{item.describe}}</p>
        <div class="pic">
          <em>￥</em>
          <span>{{item.price}}</span>
          <em>.00</em>
        </div>
        <div class="oldPic">
          <del>{{item.oldPrice}}</del>
        </div>
        <div class="promotionBtn">秒杀</div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "productPromotion",
  data() {
    return {
      productList: [
        {
          productID: "1",
          img:
            "//img12.360buyimg.com/mobilecms/s410x410_jfs/t1/19621/28/13637/300650/5ca1d871Ed48607b4/ed87ad0e1d3fae8c.jpg!q70.dpg.webp",
          describe: "小米米家 米家头盔护具套装 黑 M",
          price: "189",
          oldPrice: "￥199.00"
        },
        {
          productID: "1",
          img:
            "//img12.360buyimg.com/mobilecms/s410x410_jfs/t1/19621/28/13637/300650/5ca1d871Ed48607b4/ed87ad0e1d3fae8c.jpg!q70.dpg.webp",
          describe: "小米米家 米家头盔护具套装 黑 M",
          price: "189",
          oldPrice: "￥199.00"
        },
        {
          productID: "1",
          img:
            "//img12.360buyimg.com/mobilecms/s410x410_jfs/t1/19621/28/13637/300650/5ca1d871Ed48607b4/ed87ad0e1d3fae8c.jpg!q70.dpg.webp",
          describe: "小米米家 米家头盔护具套装 黑 M",
          price: "189",
          oldPrice: "￥199.00"
        },
        {
          productID: "1",
          img:
            "//img12.360buyimg.com/mobilecms/s410x410_jfs/t1/19621/28/13637/300650/5ca1d871Ed48607b4/ed87ad0e1d3fae8c.jpg!q70.dpg.webp",
          describe: "小米米家 米家头盔护具套装 黑 M",
          price: "189",
          oldPrice: "￥199.00"
        },
        {
          productID: "1",
          img:
            "//img12.360buyimg.com/mobilecms/s410x410_jfs/t1/19621/28/13637/300650/5ca1d871Ed48607b4/ed87ad0e1d3fae8c.jpg!q70.dpg.webp",
          describe: "小米米家 米家头盔护具套装 黑 M",
          price: "189",
          oldPrice: "￥199.00"
        },
        {
          productID: "1",
          img:
            "//img12.360buyimg.com/mobilecms/s410x410_jfs/t1/19621/28/13637/300650/5ca1d871Ed48607b4/ed87ad0e1d3fae8c.jpg!q70.dpg.webp",
          describe: "小米米家 米家头盔护具套装 黑 M",
          price: "189",
          oldPrice: "￥199.00"
        }
      ]
    };
  }
};
</script>
<style scoped>
.productPromotion {
  padding: 30px;
  border-radius: 16px;
  margin-bottom: 100px;
}
.productPromotion img {
  width: 210px;
  height: 210px;
}
.productPromotion > a {
  display: flex;
  border-bottom: 2px solid #e5e5e5;

}
.productPromotion .shopListItemLeft {
  margin-left: 15px;
  position: relative;
}
.productPromotion .shopListItemLeft > p {
  font-size: 30px;
  line-height: 62px;
  color: black;
  margin-top: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 62px;
}
.shopListItemLeft .pic{
    margin-top: 36px;
  color: #e93b3d;

}
.shopListItemLeft .pic span {
  font-size: 28px;
  font-weight: 600;
}
.oldPic{
    color: #d1d1d1;
    margin-top: 35px;
}
.promotionBtn {
  position: absolute;
  right: 0;
  bottom: 40px;
  background: linear-gradient(90deg,#e93b3d,#ff9574);
  height: 60px;
  padding: 0 30px;
  font-size: 28px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  border-radius: 60px;
}
</style>


