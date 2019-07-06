<template>
  <div class="details_item">
    <DetailsItemHeader></DetailsItemHeader>
    <DetailsItemContent :detailsItemContent="detailsItemInfo"></DetailsItemContent>
    <DetailsGoodsAction></DetailsGoodsAction>
  </div>
</template>
	

<script>
// 引入DetailsItemHeader
import DetailsItemHeader from "../components/detailsItem/detailsItemHeader";
// 引入DetailsItemContent
import DetailsItemContent from "../components/detailsItem/detailsItemContent";
// 引入detailsGoodsAction
import DetailsGoodsAction from "../components/SinresDetails/detailsGoodsAction";
import {detail} from './../api/url';
export default {
  name: "DetailsItem",
  data() {
    return {
      detailsItemInfo: {}
    };
  },
  //请求数据
  created() {
    this.axios
      .get(detail + "comment/?productID=1005")
      .then(response => {
        this.detailsItemInfo = response.data;
        console.log(this.detailsItemInfo);
      })
      .catch(error => {
        console.log(error);
      });
  },
  components: {
    DetailsItemHeader,
    DetailsItemContent,
    DetailsGoodsAction
  }
};
</script>



<!-- 引入detailsItem.css样式 -->
<style src='../../static/css/detailsItem.css'></style>
<style scoped>
</style>
