<template>
	<div class="details-root">

		<div class="details_root">
			<!-- <DetailsFourTitle></DetailsFourTitle> -->
			<DetailsTop></DetailsTop>
			<DetailsSlideshow :detailsSlideshowHandle='detailsInfo'></DetailsSlideshow>
			<DetailsIntroduce :detailsIntroduce='detailsInfo'></DetailsIntroduce>
			<DetailsGoodsItem :detailsGoodsItem='detailsInfo'></DetailsGoodsItem>
			<!-- 评价 -->
			<DetailsEvaluate :detailsEvaluate='detailsInfo'></DetailsEvaluate>
			<!-- 推荐 -->
			<DetailsRecommend :detailsRecommendHandle='detailsInfo'></DetailsRecommend>
			<!-- 最后 -->
			<DetailsGoodsAction></DetailsGoodsAction>
			<DetailsMask v-show='false'></DetailsMask>
		</div>
	</div>
</template>

<script>
	import NavBar from '../components/common/navBar'
	// 引入前后返回的组件
	import DetailsTop from "../components/SinresDetails/detailsTop"
	// 引入四个标题的组件
	import DetailsFourTitle from "../components/SinresDetails/detailsFourTitle";
	// 引入DetailsSlideshow
	import DetailsSlideshow from "../components/SinresDetails/detailsSlideshow";
	// 引入DetailsIntroduce
	import DetailsIntroduce from "../components/SinresDetails/detailsIntroduce";
	// 引入DetailsGoodsAction
	import DetailsGoodsAction from "../components/SinresDetails/detailsGoodsAction";
	// 引入DetailsGoodsItem
	import DetailsGoodsItem from "../components/SinresDetails/detailsGoodsItem";
	// 引入DetailsEvaluate(评价)
	import DetailsEvaluate from "../components/SinresDetails/detailsEvaluate";
	// 引入DetailsRecommend(推荐)
	import DetailsRecommend from "../components/SinresDetails/detailsRecommend";
	//引入DetailsMask(蒙版)
	import DetailsMask from '../components/SinresDetails/detailsMask';
	import {detail} from './../api/url';
	export default {
		name: "Details",
		data() {
			return{
				detailsInfo:{}
			}
			
		},
		// 注册
		components: {
			DetailsTop,
			DetailsFourTitle,
			NavBar,
			DetailsSlideshow,
			DetailsIntroduce,
			DetailsGoodsAction,
			DetailsGoodsItem,
			DetailsEvaluate, //(评价)
			DetailsRecommend, //(推荐)
			DetailsMask
		},
		methods: {
			backClickHandle() {
				goBack(this.$router)
			},
			moreMenuClickHandle() {
				this.flag = !this.flag;
			}
		},
		created() {
			let a=this.$route.query.productID;

			this.axios.get("detail"+"?productID=1005&",{"token":''})
			.then((response) => {
				this.detailsInfo = response.data;
				console.log(response.data)
				// console.log(this.detailsInfo);
			}).catch((error) => {
				console.log(error)
			})
			
		},
		 //




	}
</script>

<!-- 引入details.css样式 -->
<style src='../../static/css/details.css'></style>
<style scoped>

</style>
