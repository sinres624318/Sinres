<template>
  <div class="shopList">
    <div class="shopListItem" v-for="(item,index) in shopProductInfo" :key="index">
      <a href="#" >
        <img v-if="item.img" :src="item.img" alt="商品">
        <div class="shopListItemBottom">
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
            <div class="evalute_right">
              <a href>
                <img src="./../../../static/img/shop/shop_list_item_toCart.png" alt>
              </a>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopProductV",
  props:{
    shopProductInfo:{
      type:Array,
      required:true
    }
  }

};
</script>
<style src='./../../../static/css/reset.css'></style>
<style scoped>
.shopList{
    display: flex;
    width: 100%;
    height: 100%;
    margin-bottom: 100px;
  flex-wrap: wrap;
}
.shopListItem {
  width: 50%;
  border-bottom: 8px solid rgb(243, 244, 247);
  border-right: 8px solid rgb(243, 244, 247);
}
.shopListItemBottom {
  padding: 10px;
}
.shopListItem p {
  font-size: 24px;
  line-height: 30px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-top: 10px;
}
.shopListItem > a > img {
  width: 350px;
  height: 376px;
}
.pic {
  font-size: 24px;
  color: #f02b16;
  margin-top: 15px;
}
.evaluate {
  display: flex;
  justify-content: space-between;
}
.evalute_left {
  display: flex;
  align-items: center;
}
.evalute_right {
  width: 50px;
  height: 50px;
}
</style>


