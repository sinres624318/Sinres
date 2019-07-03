<template>
		<div class="details-root">
      <div class="details_root">
			<DetailsSlideshow></DetailsSlideshow>
			<DetailsIntroduce></DetailsIntroduce>
			<DetailsGoodsItem></DetailsGoodsItem>
			<!-- 评价 -->
			<DetailsEvaluate></DetailsEvaluate>
			<!-- 推荐 -->
			<DetailsRecommend></DetailsRecommend>
			<!-- 最后 -->
			<DetailsGoodsAction></DetailsGoodsAction>
		</div>
    </div>
</template>

<script>
  import NavBar from '../components/common/navBar'
	// 引入DetailsSlideshow
  import DetailsSlideshow from "../components/SinresDetails/detailsSlideshow"
	// 引入DetailsIntroduce
	import DetailsIntroduce from "../components/SinresDetails/detailsIntroduce"
	// 引入DetailsGoodsAction
	import DetailsGoodsAction from "../components/SinresDetails/detailsGoodsAction"
	// 引入DetailsGoodsItem
	import DetailsGoodsItem from "../components/SinresDetails/detailsGoodsItem"
	// 引入DetailsEvaluate(评价)
	import DetailsEvaluate from "../components/SinresDetails/detailsEvaluate"
	// 引入DetailsRecommend(推荐)
	import DetailsRecommend from "../components/SinresDetails/detailsRecommend"
    export default {
      name: "Details",
      data(){
      },
			// 注册
      components:{
        NavBar,
        DetailsSlideshow,
				DetailsIntroduce,
				DetailsGoodsAction,
				DetailsGoodsItem,
				DetailsEvaluate,//(评价)
				DetailsRecommend,//(推荐)
      },
      methods: {
        backClickHandle() {
          goBack(this.$router)
        },
        moreMenuClickHandle() {
          this.flag = !this.flag;
        }
      }
    }
</script>

<!-- 引入details.css样式 -->
<style src='../../static/css/details.css'></style>
<style scoped>

</style>
