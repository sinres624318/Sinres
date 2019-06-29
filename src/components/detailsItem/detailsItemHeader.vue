<template>
	<div>
		<div class="details_ItemHeader">
			<a href="#" @click="backHandel()" class="back_img"><img src="../../../static/img/Details_item/back.png" alt=""></a>
			<h1>商品评价</h1>
			<a href="" class="clickMore_img"><img src="../../../static/img/Details_item/menu.png" alt=""></a>
		</div>
		<!--  -->
		<div class="details_ItemTitle">
			<a href="" class="all_argument">全部(80+)</a>
			<a href="" class="nice_argument">好评(50+)</a>
			<a href="" class="middle_argument">中评(0)</a>
			<a href="" class="bad_argument">差评(3)</a>
			<a href="" class="degree">好评度(95%)</a>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'DetailsItemHeader',
		data(){
			return{
				
			}
		},
		methods:{
			backHandel(){
				this.$router.back();
			}
		}
		
		
		
		
		
		
		
		
		
		
	}
</script>

<style>
</style>
