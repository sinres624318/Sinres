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
						<h3>￥{{each_item.price}}</h3>
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
							img: "../../../static/img/Details/banner03.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "11388"
						}],
						// 二
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/banner04.jpg",
							title: "苹果",
							describe: "苹果Apple  MacBook Pro13.3英寸2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "3500"
						}],
						// 三
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/dell.jpg",
							title: "戴尔",
							describe: "戴尔（DELL）Precision7730 17.3英寸移动图形工作站 性能级高端笔记本 E-2186M 64",
							price: "9988"
						}],
						
						// 四
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/huawei.png",
							title: "华为",
							describe: "华为2019新款/2018款/2017苹果笔记本电脑 18款银色/256G/带bar/MR9U2CH/A",
							price: "12300"
						}],
						
						// 五
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/lenvo.jpg",
							title: "联想",
							describe: "联想ThinkPad E480 英特尔酷睿i5 14英寸轻薄商务办公笔记本电脑银色i5-8250U 8G内存 1T硬盘 FHD 4SCD",
							price: "6600"
						}],
						
						// 六
						[{ //6组
							productID: "int",
							img: "../../../static/img/Details/dd.png",
							title: "得峰",
							describe: "得峰（Deffad）大核WIN7 微边框键盘镜面全面屏 超轻簿本游戏本 办公笔记本电脑 新品叱兔新款 红色(金属) 4G内存+SSD128G",
							price: "1600"
						}]
					]
				}
				
				
				
				
			}
		},
		
		
		
		
		
	}
</script>

<style>

</style>
