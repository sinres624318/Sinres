<template>
  <div class="patPat">
    <div class="patPatBanner">
      <van-swipe :autoplay="3000" indicator-color="orange">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img v-lazy="item">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="patPatCard">
      <div class="patPatCardLeft">
          <a href="#"><img src="../../static/img/patPat/pat-cat-left.gif" alt="拍拍夺宝岛"></a>
      </div>
      <div class="patPatCardRight">
          <div>
              <a href="#"><img src="./../../static/img/patPat/jdbjk.png" alt="京东备件库"></a>
          </div>
          <div>
              <a href="#"><img src="./../../static/img/patPat/jdzm.png" alt="京东转卖"></a>
              <a href="#"><img src="./../../static/img/patPat/ppyj.png" alt="拍拍验机"></a>
          </div>
      </div>
    </div>
    <div class="patPatLove">
        <img src="./../../static/img/patPat/cnxh.png" alt="">
    </div>
    <div class="patPatList"></div>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Lazyload } from "vant";

export default {
  name: "patPat",
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    Lazyload
  },
  data() {
    return {
      banner: [
        "../../static/img/patPat/pat-banner1.png",
        "../../static/img/patPat/pat-banner2.png"
      ]
    };
  }
};
</script>

<style scoped>
.patPat {
  height: 100%;
  overflow-y: auto;
}
</style>
