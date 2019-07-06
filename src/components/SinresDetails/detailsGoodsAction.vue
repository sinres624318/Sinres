<template>
	<div class="details_GoodsAction">

		<van-goods-action>
			<router-link to='/Register'>
				<van-goods-action-icon icon="chat-o" text="客服" />
			</router-link>
			<router-link to='/shop'>
				<van-goods-action-icon icon="shop-o" text="进店" />
			</router-link>
			<router-link to='/cart'>
				<van-goods-action-icon info="5" icon="cart-o" text="购物车" />
			</router-link>
			<van-goods-action-button type="warning" text="加入购物车" @click='changesHandel'/>
			<van-goods-action-button type="danger" text="立即购买" @click='changesHandel'/>
		</van-goods-action>

	</div>


</template>

<script>
	import {
		GoodsAction,
		GoodsActionIcon,
		GoodsActionButton
	} from 'vant';
	export default {
		name: 'DetailsGoodsAction',
		
		data(){
			return{
				flag:false,
				show:false,
			}
		},
		components: {
			'van-goods-action': GoodsAction,
			'van-goods-action-icon': GoodsActionIcon,
			'van-goods-action-button': GoodsActionButton
			

		},
		methods:{
			chooseGoods(){
				this.flag=!this.flag;
			},
			changesHandel(){
				this.show=!this.show;
				this.Observer.$emit("change",this.show);
				// console.log(this.show)
			}
		},
		created(){
			this.Observer.$on("aa",(val)=>{
				this.show=val;
				//console.log(val)
			})
		}
	}
</script>

<style>
	.van-goods-action {
		display: flex;
	}
	.van-goods-action>a {
		flex:1;
	}
	.van-goods-action>button {
		flex:1;
	}
</style>
