<template>
  <div class="product-list">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="search-warp">
          <div class="search-input">
            <span></span>
            <input type="text" placeholder="行车记录仪">
          </div>
        </div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" @click="moreMenuClickHandle">&#xe670;</div>
      </template>
    </NavBar>
    <SortBlock></SortBlock>
    <ProductListProduct :productList="productList"></ProductListProduct>
  </div>
</template>

<script>
  import ProductListProduct from '../components/productList/productListProduct'
  import SortBlock from '../components/productList/sortBlock'
  import NavBar from './.././components/common/navBar'

  export default {
    name: "productList",
    components: {
      NavBar,
      ProductListProduct,
      SortBlock
    },
    data() {
      return {
        productList: []
      }
    },
    methods: {
      backClickHandle() {
        this.$router.go(-1);
      },
      moreMenuClickHandle() {
        this.flag = !this.flag;
      }
    },
    created() {
      console.log(this.$route.params.productType);
      let productType = this.$route.params.productType;
      this.axios.get("http://10.35.161.65:9005/classify/list/?productTypeID=" + 1005)
        .then((response) => {
          let data = response.data;
          if (data.code === 200) {
            this.productList = data.productList;
            console.log(this.productList);
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
</script>

<style src="./../../static/css/productList.css"></style>
