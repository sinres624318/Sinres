<template>
	<div class="DetailsIntroduce">
		
		<!--  -->
		<div class="price_focus">
			<h2>{{detailsIntroduce.price}}</h2>
			<div class="focus" @click='guanzhuHnadle'>
				<img src="../../../static/img/Details/collecting.jpg" alt="">
				<span>关注</span>
			</div>
		</div>
		
		<!--  -->
		<div class="product_content">
			<h1>
				<span>自营</span>
				{{detailsIntroduce.title}}
			</h1>
			<p class="sales">describe: '【6月苹果超值特惠】【2019新品MacbookPro官网至高直降1000元！】【5599指定MacbookAir跟你走！】走过路过千万不要错过！ ',</p>
			
		</div>
		
		<!--  -->
		<div class="choose">
			<div>
				<span>已选</span>
				<p>{{detailsIntroduce.productModel}}</p>
				<p>...</p>
				
			</div>
			<p class="service">本商品支持保障服务，点击可选服务</p>
			
		</div>
		
		
		
		
	</div>
</template>

<script>
	export default{
		name:'DetailsIntroduce',
		// 接收
		props: {
			detailsIntroduce: {
				type: Object,
				required: true
			}
		
		}
		
		/*
		data(){
			return{
				price:'¥12498.00',
				title:'Apple Macbook Pro 13.3【带触控栏】Core i5 8G 256G SSD 深空灰 苹果笔记本电脑 轻薄本 MR9Q2CH/A',
				productModel:'19款13.3英寸 八代i5 8G 256G灰,普通版,1个',
				
				
				
				
			}
		}
		*/

		,methods:{
			guanzhuHnadle(){
				console.log(111)
				this.axios.post("http://10.35.162.133:9005/mine/collect/product/delete/",{
					"token":"123456",
					// "type_id":0,
					"clt_id":1340
				})
				.then((data)=>{
					console.log(data.data.code);
					console.log(data.data.msg);
				})
				.catch((error)=>{
					console.log(error);
				})
			}
		}
		
		
		
		
	}
	
	
</script>

<style>
</style>
