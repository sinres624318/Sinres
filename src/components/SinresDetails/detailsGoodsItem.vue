<template>
	<div class="DetailsGoodsItem">
		<!--  -->
		<div class="items">
			<a href="" @click="backClickHandle"><img src="../../../static/img/Details/back.png" alt=""></a>

			<a href="">
				<img src="../../../static/img/Details/target.png" alt="">
				<span>商品</span>
			</a>
			<a href="">评价</a>
			<a href="">详情</a>
			<a href="">推荐</a>
			<a href=""><img src="../../../static/img/Details/menu.png" alt=""></a>
		</div>
		<!--  -->
		<div class="address">
			<div>
				<span>送至</span>
				<h1>{{detailsGoodsItem.address}}</h1>
				<!-- 点击出现选择区域 -->
				<img src="../../../static/img/Details/menu.png" alt="" @click="areaCity">

			</div>


			<div>
				<!-- 重量写死 -->
				<span>重量</span>
				<h1>2.5kg</h1>
			</div>

		</div>
		<!-- service_state -->
		<div class="service_state">
			<div>
				<img src="../../../static/img/Details/server.png">
				<p>99元免基础运费(20kg内)</p>
				<img src="../../../static/img/Details/server.png">
				<p>京东发货&售后</p>
				<p>...</p>
			</div>


			<div>
				<img src="../../../static/img/Details/circle.gif">
				<p>不支持7天无理由退货</p>
				<img src="../../../static/img/Details/circle.gif">
				<p>不可使用京券东券</p>

			</div>
		</div>
		<!-- 评价 -->
		<div class="details_evaluation">
			<!-- 评价头部 -->
			<div class="details_evaluation_header">
				<h1>评价</h1>
				<p>好评&nbsp8890条</p>
				<span>共&nbsp9000&nbsp条</span>

				
				<img src="../../../static/img/Details/back_right.png">
			</div>
			<!-- 评价内容 -->
			
			





<!-- 出不来，切换 -->

<div class="details_evaluation_content">
				<div class="details_evaluation_content_top"> 
					<img src="../../../static/img/Details/head_portrait.png" class="head_portrait">
					<span>lee..</span>
					
					<img src="../../../static/img/Details/star.gif" class="details_evaluation_content_stars">
					<p>2019.8</p>
				</div>

				<div class="details_evaluation_content_main">
					顺风物流很快，快递小哥服务很好。衣服质量非常满意，尺码标准，纯棉面料，做工精细，试穿效果很理想，京东作活动时买的，物有所值。同时还要感谢客服人员热情和细致的服务
				</div>
			</div>


<div class="details_evaluation_content">
				<div class="details_evaluation_content_top"> 
					<img src="../../../static/img/Details/head_portrait.png" class="head_portrait">
					<span>kobe..</span>
					
					<img src="../../../static/img/Details/star.gif" class="details_evaluation_content_stars">
					<p>2018.11</p>
				</div>

				<div class="details_evaluation_content_main">
					电脑很好，我很喜欢，是我喜欢的类型，之前一直想入手的对象，今天终于买了，买来是用来写代码学习的，一点都不卡，很流畅，希望这家店越来越好，会一直支持下去的，
				</div>
			</div> 











			<!-- 查看全部评价 -->
			<!-- 路由跳转 -->
			
			<router-link to='/detailsItem' >
				<div class="check_all">
					<a>
						<p>查看全部评价</p>
						<img src="../../../static/img/Details/back_right.png" alt="">
					</a>
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	import {
		goBack
	} from './../../assets/js/common'
	import {
		Area
	} from 'vant';

	export default {
		name: "DetailsGoodsItem",
		// 接收
		props: {
			detailsGoodsItem: {
				type: Object,
				required: true
			}
		
		},
		methods: {
			backClickHandle() {
				goBack(this.$router)
			},
			areaCity() {

			}
		},
		created(){
			console.log(this.detailsGoodsItem.evaluate)
		}
	}
</script>

<style>
</style>
