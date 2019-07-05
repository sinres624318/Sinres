<template>
  <div>
    <div v-for="(item,index) in shopProductInfo" :key="index" class="allProductItem"
         @click="toDetailsHandle(item.productID)">
      <a href="#">
        <div class="productTtemPic">
          <img v-if="item.img" :src="item.img" alt>
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
    name: "shopProductH",
    props: {
      shopProductInfo: {
        type: Array,
        required: true
      }
    },
    methods: {
      toDetailsHandle(id) {
        this.$router.push({
          path: '/details',
          query: {productID: id}
        })
      }
    },
  }
</script>
<style src='./../../../static/css/reset.css'></style>
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
