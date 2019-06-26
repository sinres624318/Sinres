<template>
  <div class="allProduct">
    <shopHeader></shopHeader>
    <!-- nav-------------- -->
    <div class="allNav">
      <van-tabs nav-left='<van-icon name="close" />'>
        <van-tab title="默认">
          <div class="allProductList">
            <productH></productH>
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
import shopHeader from './../../components/shop/shopHeader'
import productH from './../../components/shop/productH'
import { Tab, Tabs } from "vant";
export default {
  name: "shopAllProduct",
  components: {
    "van-tab": Tab,
    "van-tabs": Tabs,
    shopHeader,
    productH
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
