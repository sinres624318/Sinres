<template>
  <div class="promotion" v-if="shopProductInfo">
    <ShopHeader :shopProductInfo="shopProductInfo" v-if="shopProductInfo"></ShopHeader>
    <div class="promotionList">
      <p>以下商品参加限时秒杀，欢迎选购</p>
      <div class="promotionLists">
        <shopProductPromotion :shopProductInfoHandle="shopProductInfo.productList"></shopProductPromotion>
      </div>

    </div>
  </div>
</template>
<script>
  import ShopHeader from "./../../components/shop/shopHeader";
  import ShopProductPromotion from "./../../components/shop/shopProductPromotion";

  export default {
    name: "shopPromotion",
    components: {
      ShopHeader,
      ShopProductPromotion
    },
    data() {
      return {
        shopProductInfo: '',
      }
    },
    props:{
      shopId:{
        type:String,
        required:true
      }
    },
    created() {
      this.axios.get("http://10.35.162.104:9005/shop/"+this.shopId+"/pomotion").then((data) => {
        this.shopProductInfo = data.data;
        console.log(this.shopProductInfo)
      }).catch((err) => {
        // console.log('err')
      })
    }
  };
</script>
<style scoped>
  .shop {
    overflow-y: auto;
    height: 100%;
    background-size: 100%;
  }

  /* promotionList-------------- */
  .promotionList {
    background: #f7f7f7;
    padding: 10px 20px 30px;


  }

  .promotionList > p {
    height: 60px;
    background: #f7f7f7;
    text-align: center;
    font-size: 24px;
    color: #9a9a9a;
    line-height: 60px;
  }

  .promotionLists {
    border-radius: 16px;
    background: #fff;
  }
</style>
