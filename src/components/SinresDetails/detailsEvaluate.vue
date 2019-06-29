<template>
	<div class="details_evaluate">
		<!-- 头 -->
		<div class="details_evaluate_header">
			<div>
				<img :src="shopInfo.Logo" alt="" class="shopInfo_Logo">
				<h2>{{shopInfo.shopName}}</h2>
				<img src="../../../static/img/Details/jd_self.gif" alt="self">
			</div>
			
			<!-- 二 -->
			<div class="details_evaluate_header_number">
				<div>
					<p class="all_number">{{shopInfo.fansNumber}}</p>
					<p class="all_people_goods">粉丝人数</p>
				</div>
				<img src="../../../static/img/Details/vertical_line.gif" alt="">
				<div>
					<p class="all_number">{{shopInfo.allProductNumber}}</p>
					<p class="all_people_goods">全部商品</p>
				</div>
			</div>
			
			<!-- 三 -->
			<div>
				<img src="../../../static/img/Details/enter_store.gif" alt="">
				<img src="../../../static/img/Details/focus_store.gif" alt="">
			</div>
		</div>
		
		<!-- 主要内容 -->
		<div class="details_evaluate_main">
			<!-- 主要内容下面的标题 -->
			<div class="details_evaluate_main_title">
				<h1>店铺推荐</h1>
			</div>
			
			
			<div class="details_evaluate_main_content">
				<!-- 循环的内容 -->
				<div v-for="(item,index) in shopInfo.shopRecommend" :key='index' class="details_evaluate_main_content_item">
					<div v-for="each_item in item">
						<img :src="each_item.img" alt="">
						<h2>{{each_item.title}}</h2>
						<p>{{each_item.describe}}</p>
						<h3>{{each_item.price}}</h3>
					</div>
				</div>
				
				
			</div>
			
			
			
			
			
		</div>
		
		
		

	</div>
</template>

<script>
	export default {
		name: "DetailsEvaluate",


		data() {


			return {
				shopInfo: {
					shopID: "int",
					Logo: "../../../static/img/Details/iphone_logo.gif",
					shopName: "Apple产品京东自营旗舰店",
					fansNumber: "16047291",
					allProductNumber: "997",
					
					shopRecommend: [ //二维数组，每个数组5组
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/details_evaluate_main_content.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}],
						// 二
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/details_evaluate_main_content.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}],
						// 三
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/details_evaluate_main_content.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}],
						
						// 四
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/details_evaluate_main_content.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}],
						
						// 五
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/details_evaluate_main_content.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}],
						
						// 六
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/details_evaluate_main_content.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}]
					]
				}





			}





		},
		//方法










	}
</script>

<style>

</style>
