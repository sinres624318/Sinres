<template>
	<div class="DetailsIntroduce">
		<div class="price_focus">
			<h2>{{detailsIntroduce.price}}</h2>
			<div class="focus" @click='guanzhuHnadle' >
				<img src="../../../static/img/Details/collecting.jpg" alt="">
				<span>关注</span>
			</div>
		</div>
		<div class="product_content">
			<h1>
				<span>自营</span>
				{{detailsIntroduce.title}}
			</h1>
			<p class="sales">describe: '【6月苹果超值特惠】【2019新品MacbookPro官网至高直降1000元！】【5599指定MacbookAir跟你走！】走过路过千万不要错过！ ',</p>
			
		</div>
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
	import {getCookie} from './../../assets/js/common'

	export default{
		name:'DetailsIntroduce',
		// 接收
		props: {
			detailsIntroduce: {
				type: Object,
				required: true
			}
		
		},
		methods:{
			guanzhuHnadle(){
//  				let a=getCookie('token');
//  				if(a===''){
//  					this.$router.push({path:'/register'})
//  				}else{
				this.axios.post("http://10.35.162.104:9005/mine/collect/product/delete/",{
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
				// }
			}
		}	
	}
	
	
</script>

<style>
</style>
