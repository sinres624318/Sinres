<template>
		<div class="details_item">
			<DetailsItemHeader></DetailsItemHeader>
			
			<DetailsItemContent></DetailsItemContent>
			<DetailsGoodsAction></DetailsGoodsAction>
		</div>
		
</template>
	

<script>
	// 引入DetailsItemHeader
  import DetailsItemHeader from "../components/detailsItem/detailsItemHeader"
	
	// 引入DetailsItemContent
	import DetailsItemContent from "../components/detailsItem/detailsItemContent"
	
	
	// 引入detailsGoodsAction
	import DetailsGoodsAction from "../components/SinresDetails/detailsGoodsAction"
	
	
    export default {
      name: "DetailsItem",
			// 注册
      components:{
				DetailsItemHeader,
				DetailsItemContent,
				DetailsGoodsAction,
      },
			
			
			
			
			
    }
</script>



<!-- 引入detailsItem.css样式 -->
<style src='../../static/css/detailsItem.css'></style>
<style scoped>

</style>
