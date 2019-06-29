<template>
		<div class="details_root">
			<DetailsSlideshow></DetailsSlideshow>
			<DetailsIntroduce></DetailsIntroduce>
			<DetailsGoodsItem></DetailsGoodsItem>
			
			<!-- 评价 -->
			<DetailsEvaluate></DetailsEvaluate>
			
			<!-- 详情 -->
			<!-- <DetailsParticulars></DetailsParticulars> -->
			
			<!-- 推荐 -->
			<DetailsRecommend></DetailsRecommend>
			
			<!-- 最后 -->
			<DetailsGoodsAction></DetailsGoodsAction>
		</div>
		
</template>
	

<script>
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
	
	// 引入DetailsParticulars(详情)
	import DetailsParticulars from "../components/SinresDetails/detailsParticulars"
	
	// 引入DetailsRecommend(推荐)
	import DetailsRecommend from "../components/SinresDetails/detailsRecommend"
	

  
    export default {
      name: "Details",
			// 注册
      components:{
        DetailsSlideshow,
				DetailsIntroduce,
				DetailsGoodsAction,
				DetailsGoodsItem,
				DetailsEvaluate,//(评价)
				DetailsParticulars,//(详情)
				DetailsRecommend,//(推荐)
      },
			
			
			
			
			
    }
</script>

<!-- 引入details.css样式 -->
<style src='../../static/css/details.css'></style>
<style scoped>

</style>
