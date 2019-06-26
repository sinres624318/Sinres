<template>
  <div class="allProduct">
    <ShopHeader></ShopHeader>
    <!-- nav-------------- -->
    <div class="allNav">
      <van-tabs nav-left='<van-icon name="close" />'>
        <van-tab title="默认">
          <div class="allProductList">
            <ShopProductH></ShopProductH>
          </div>
        </van-tab>
        <van-tab title="销量">内容 2</van-tab>
        <van-tab title="价格">内容 3</van-tab>
        <van-tab  title="上新">内容 4</van-tab>

      </van-tabs>
    </div>
  </div>
</template>
<script>
import ShopHeader from './../../components/shop/shopHeader'
import ShopProductH from './../../components/shop/shopProductH'
import { Tab, Tabs } from "vant";
export default {
  name: "shopAllProduct",
  components: {
    "van-tab": Tab,
    "van-tabs": Tabs,
    ShopHeader,
    ShopProductH
  }
};
</script>
<style src="./../../../static/css/shop/shopAllProduct.css">

</style>

<style>
.allNav .van-tab{
  width: 80%;
}
</style>
