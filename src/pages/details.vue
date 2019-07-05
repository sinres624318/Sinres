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
	import DetailsFourTitle from "../components/SinresDetails/detailsFourTitle"
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
	//引入DetailsMask(蒙版)
	import DetailsMask from '../components/SinresDetails/detailsMask'
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
     //https://www.easy-mock.com/mock/5d1c7e29c6ffa44a60b5edaf/example/banner
		//请求数据
		//?productID=1005&token=4dc7c68973ee4997a90dcf6702b661f7
		//http://10.35.161.33:9005/detail/?productID=1005&token=''"
		created() {
			let a=this.$route.query.productID;
			this.axios.post("http://10.35.161.33:9005/detail/add/",{
				"token":"4dc7c68973ee4997a90dcf6702b661f7",
				"productID":1005,
				'shopID':'101',
				'productNum':4
				}).then((response) => {
				this.detailsInfo = response.data;
				console.log(this.detailsInfo)
				// console.log(this.detailsInfo);
			}).catch((error) => {
				console.log(error)
			})
		},
	}
</script>

<!-- 引入details.css样式 -->
<style src='../../static/css/details.css'></style>
<style scoped>

</style>
