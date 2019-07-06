<template>
  <div>
    <div class="allProduct" v-if="shopProductInfo">
      <ShopHeader :shopProductInfo="shopProductInfo"></ShopHeader>
      <!-- nav-------------- -->
      <div class="allNav">
        <van-tabs nav-left='<van-icon name="close" />'>
          <van-tab title="默认">
            <div class="allProductList">
              <ShopProductH v-if="flag" :shopProductInfo="shopProductInfo.productList"></ShopProductH>
              <ShopProductV v-if='!flag' :shopProductInfo="shopProductInfo.productList"></ShopProductV>
            </div>
          </van-tab>
          <van-tab title="销量">
            <div class="allProductList">
              <ShopProductH v-if="flag" :shopProductInfo="shopProductInfo.salesList"></ShopProductH>
              <ShopProductV v-if='!flag' :shopProductInfo="shopProductInfo.salesList"></ShopProductV>
            </div>
          </van-tab>
          <van-tab title="价格">
            <div class="allProductList">
              <ShopProductH v-if="flag" :shopProductInfo="shopProductInfo.priceList"></ShopProductH>
              <ShopProductV v-if='!flag' :shopProductInfo="shopProductInfo.priceList"></ShopProductV>
            </div>
          </van-tab>
          <van-tab title="上新">
            <h1 style="margin-top: 100px; text-align: center">暂无新品发售，敬请期待！</h1>
          </van-tab>
        </van-tabs>
        <div class="shopNavRightButton" @click="productDisplayMethodHandle">
          <i v-if="flag" class="van-icon van-icon-qr"></i>
          <i v-else class="van-icon van-icon-wap-nav"></i>
        </div>
      </div>
    </div>
    <Loading v-if="!shopProductInfo"></Loading>
  </div>

</template>
<script>
  import Loading from './../../components/common/loading'
  import ShopHeader from './../../components/shop/shopHeader'
  import ShopProductH from './../../components/shop/shopProductH'
  import ShopProductV from './../../components/shop/shopProductV'
  import {Tab, Tabs} from "vant";
  import {shop} from './../../api/url'
  export default {
    name: "shopAllProduct",
    components: {
      "van-tab": Tab,
      "van-tabs": Tabs,
      ShopHeader,
      ShopProductH,
      ShopProductV,
      Loading
    },
    data() {
      return {
        flag: true,
        shopProductInfo: ''
      }
    },
    methods: {
      productDisplayMethodHandle() {
        this.flag = !this.flag
      }
    },
    props: {
      shopId: {
        type: String,
        required: true
      }
    },
    created() {
      this.axios.get(shop + this.shopId + "/all").then((data) => {
        this.shopProductInfo = data.data;
        console.log(this.shopProductInfo)
      }).catch((err) => {
        console.log(err)
      })
    },

  };
</script>
<style src="./../../../static/css/shop/shopAllProduct.css">

</style>

<style>
  .allNav .van-tab {
    width: 80%;
  }

  /* 导航栏右侧的按钮 */
  .van-tabs__wrap {
    margin-right: 60px;
  }

  .allNav {
    position: relative;
  }

  .shopNavRightButton {
    width: 60px;
    height: 80px;
    background: white;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2;
    line-height: 80px;
    text-align: center;
  }

  .shopNavRightButton > i {
    vertical-align: middle;
  }
</style>
