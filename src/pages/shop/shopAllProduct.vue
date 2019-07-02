<template>
  <div class="allProduct" v-if="shopProductInfo">
    <ShopHeader></ShopHeader>
    <!-- nav-------------- -->
    <div class="allNav">
      <van-tabs nav-left='<van-icon name="close" />'>
        <van-tab title="默认">
          <div class="allProductList">
            <ShopProductH v-if="flag" :shopProductInfoHandle="shopProductInfo"></ShopProductH>
            <ShopProductV v-if='!flag'  :shopProductInfoHandle="shopProductInfo.productList"></ShopProductV>
          </div>
        </van-tab>
        <van-tab title="销量">内容 2</van-tab>
        <van-tab title="价格">内容 3</van-tab>
        <van-tab  title="上新">内容 4</van-tab>
      </van-tabs>
      <div class="shopNavRightButton" @click="productDisplayMethodHandle">
        <i v-if="flag" class="van-icon van-icon-qr"></i>
        <i v-else class="van-icon van-icon-wap-nav"></i>
      </div>
    </div>
    <Loading v-if="!shopProductInfo.productList"></Loading>
  </div>
</template>
<script>
import Loading from './../../components/common/loading'
import ShopHeader from './../../components/shop/shopHeader'
import ShopProductH from './../../components/shop/shopProductH'
import ShopProductV from './../../components/shop/shopProductV'
import { Tab, Tabs } from "vant";
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
  data(){
    return{
      flag:true,
      shopProductInfo:''
    }
  },
  methods:{
    productDisplayMethodHandle(){
      this.flag=!this.flag
    }
  },
  created(){
    this.axios.get("https://www.easy-mock.com/mock/5d031a44641c58517626f2b5/example/product").then((data)=>{
      this.shopProductInfo=data.data;
    }).catch((err)=>{
      console.log(err)
    })
  }
};
</script>
<style src="./../../../static/css/shop/shopAllProduct.css">

</style>

<style>
.allNav .van-tab{
  width: 80%;
}
/* 导航栏右侧的按钮 */
.van-tabs__wrap{
  margin-right: 60px;
}
.allNav{
  position: relative;
}
.shopNavRightButton{
  width: 60px;
  height: 80px;
  background:white;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  line-height: 80px;
  text-align: center;
}
.shopNavRightButton>i{
  vertical-align: middle;
}
</style>
