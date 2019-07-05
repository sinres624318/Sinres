<template>
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
	
</template>

<script>
	export default{
		name:'DetailsFourTitle',
	}
</script>

<style>
	.items {
		height: 90px;
		display: -webkit-flex;
		align-items: center;
		border-bottom: 1px solid #efefef;
		z-index: 99999999999999;
	
	}
	
	.items>a {
		font-size: 26px;
		color: #535353;
		flex: 1;
	}
	
	.items>a:nth-child(2) {
		color: #e4393c;
	}
	
	
	
	.items>a:first-child>img {
		width: 34px;
		height: 34px;
	}
	
	.items>a:nth-child(2)>img {
		width: 34px;
		height: 34px;
	}
	
	/* 三个点的样式 */
	.items>a:last-child>img {
		width: 50px;
		height: 10px;
	}
	
	
	
</style>
