<template>
  <div class="define-order">
    <DefineOrderHeader/>
    <DefineOrderAddress v-if="defineOrderInfo.address" :sendAddress="defineOrderInfo"/>
    <DefineOrderInfo v-if="defineOrderInfo.goodslist" :sendDefineOrder="defineOrderInfo"
                     :sendTel="tel"
                     :sendproductlist="productlist"/>
    <Loading v-if="!defineOrderInfo.goodslist"/>
  </div>
</template>

<script>
  import DefineOrderHeader from './../components/defineOrder/defineOrderHeader'
  import DefineOrderAddress from './../components/defineOrder/defineOrderAddress'
  import DefineOrderInfo from './../components/defineOrder/defineOrderInfo'
  import Loading from './../components/common/loading'
  import {getCookie} from './../assets/js/common'
  import {defineOrder} from "./../api/url";



  export default {
    name: "defineOrder",
    components: {
      DefineOrderHeader,
      DefineOrderAddress,
      DefineOrderInfo,
      Loading
    },
    data() {
      return {
        defineOrderInfo: {},
        productlist: [],
        tel:""
      }
    },
    created() {
      let goodslist = this.$route.params.goodslist;
      console.log(goodslist);
      this.productlist.push(this.$route.params.goodslist);
      this.axios.post(defineOrder, {
        "token": getCookie('token'),
        "goodsList": goodslist
      })
        .then((data) => {
          console.log(data);
          this.defineOrderInfo = data.data.data;
          this.tel = this.defineOrderInfo.tel
        })
        .catch((err) => {
          console.log(err)
        })
    },
    mounted() {

    }
  }
</script>
<style src="./../../static/css/defineOrder.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
