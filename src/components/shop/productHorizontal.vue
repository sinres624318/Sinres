<template>
  <dvi class="allProductItem">
    <a href="#">
      <div class="productTtemPic">
        <img src="./../../../static/img/allProductPic410x410.png" alt>
      </div>
      <div class="productItemRight">
        <p>联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD</p>
        <div class="pic">
          <em>￥</em>
          <span>5999.00</span>
        </div>
        <div class="evaluate">
          <div class="evalute_left">
            <span>7777</span>评价
            <span>78%</span>好评
          </div>
        </div>
      </div>
    </a>
  </dvi>
</template>
<script>
export default {
  neme:'productHorizontal',
  data(){
    
  }
};
</script>
<style scoped>
.allProductItem>a{
  display: flex;
}
.allProductItem .productTtemPic>img{
  width: 240px;
  height: 240px;
}
.allProductItem .productItemRight{
  padding: 20px;
  border-bottom: 1px solid #eeeeee;
}
.allProductItem .productItemRight>p{
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
.allProductItem .productItemRight .pic{
    font-size: 30px;
  color: #f02b16;
  margin-top: 55px;
  font-weight: 600;
}
.allProductItem .productItemRight .evaluate{
  margin-top: 20px;
  font-size: 22px;
}
</style>
