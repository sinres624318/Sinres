<template>
	<div class="details_GoodsAction">

		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="联系客服" />
			<van-goods-action-icon icon="shop-o" text="进店" />
			<van-goods-action-icon info="5" icon="cart-o" text="购物车" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>

	</div>


</template>

<script>
	
	// 引入
	import {
		GoodsAction,
		GoodsActionIcon,
		GoodsActionButton
	} from 'vant';
	
	// 抛出
	export default {
		name: 'DetailsGoodsAction',
		//注册
		components: {
			'van-goods-action': GoodsAction,
			'van-goods-action-icon': GoodsActionIcon,
			'van-goods-action-button': GoodsActionButton
		}




	}
</script>

<style>
</style>
