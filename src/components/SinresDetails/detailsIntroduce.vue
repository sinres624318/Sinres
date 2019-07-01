<template>
	<div class="DetailsIntroduce">
		
		<!--  -->
		<div class="price_focus">
			<h2>{{price}}</h2>
			<div class="focus">
				<img src="../../../static/img/Details/collecting.jpg" alt="">
				<span>关注</span>
			</div>
		</div>
		
		<!--  -->
		<div class="product_content">
			<h1>
				<span>自营</span>
				{{title}}
			</h1>
			<p class="sales">{{describe}}</p>
			
		</div>
		
		<!--  -->
		<div class="choose">
			<div>
				<span>已选</span>
				<p>{{productModel}}</p>
				<p>...</p>
				
			</div>
			<p class="service">本商品支持保障服务，点击可选服务</p>
			
		</div>
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'DetailsIntroduce',
		data(){
			return{
				price:'¥12498.00',
				title:'Apple Macbook Pro 13.3【带触控栏】Core i5 8G 256G SSD 深空灰 苹果笔记本电脑 轻薄本 MR9Q2CH/A',
				describe:'【6月苹果超值特惠】【2019新品MacbookPro官网至高直降1000元！】【5599指定MacbookAir跟你走！】走过路过千万不要错过！ ',
				productModel:'19款13.3英寸 八代i5 8G 256G灰,普通版,1个',
				
				
				
				
			}
		}
		
		
		
		
		
	}
	
	
</script>

<style>
</style>
