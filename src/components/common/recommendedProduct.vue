<template>
  <div class="recommend-content">
    <div class="recommend-item">
      <a class="recommend-items" @click="shopHandel(item.productID)"
         v-for="(item,index) in recommendedProduct.product_list" :key="index">
        <div class="similar-product">
          <div class="similar-posre">
            <img :src="item.img" alt="">
          </div>
          <div class="similar-product-text">{{item.title}}</div>
          <div class="similar-product-info">
            <div class="similar-product-price">
              <div class="similar-product-price-content">
                <span>￥{{item.price}}</span>
              </div>
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
    name: "recommendedProduct",
    props: {
      recommendedProduct: {
        type: Object,
        required: true
      }
    },
    methods: {
      shopHandel(productID) {
        console.log(productID);
        this.$router.push({name: 'Details', params: {productID: productID}});
      }
    }
  }
</script>

<style scoped>

  /*为你推荐*/
  .recommend-item {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: space-between;
    padding: 4px 20px 20px 20px;
  }

  .recommend-items {
    width: 49%;
    margin-bottom: 10px;
  }

  /*.indexwrap{*/
  /*  background: #e43130;*/
  /*}*/
  .similar-product {
    background-color: #fff;
    margin-bottom: 5px;
    padding-bottom: 40px;
  }

  .similar-product-text {
    height: 62px;
    font-size: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    color: #232326;
    margin-top: 10px;
    line-height: 32px;
    margin-bottom: 6px;
    padding: 0 8px;
  }


  .similar-product-info {
    height: 44px;
  }

  .similar-product-price {
    color: #e43130;
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    font-size: 32px;
    display: flex;
    justify-content: space-between;
  }

  .similar-product-price > span {
    font-size: 32px;
  }


  .similar-product-price > p {
    display: inline-block;
    width: 95px;
    height: 46px;
    border: 1px solid #686868;
    text-align: center;
    color: #686868;
    font-size: 24px;
    line-height: 46px;
    border-radius: 5px;
  }

</style>
