<template>
    <div class="shopListItem">
        <a href="#">
          <img src="./../../../static/img/shop_list_item_pic.png">
          <div class="shopListItemBottom">
            <p>联想ThinkPad X390（39CD）英特尔酷睿i5 13.3英寸轻薄笔记本电脑（i5-8265U 8G 256GSSD FHD</p>
            <div class="pic">
              <em>￥</em>
              <span>5999</span>
            </div>
            <div class="evaluate">
              <div class="evalute_left">
                <span>7777</span>评价
                <span>78%</span>好评
              </div>
              <div class="evalute_right">
                <a href>
                  <img src="./../../../static/img/shop_list_item_toCart.png" alt>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
</template>
<script>
export default {
    name:'productVertical',
}
</script>
<style scoped>
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
  width: 352px;
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


