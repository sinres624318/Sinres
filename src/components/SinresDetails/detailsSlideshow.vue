<template>
	<div class="details_slideshow">
		<van-swipe :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(item,index) in detailsSlideshowHandle.banner" :key="index"><img :src="item" alt=""></van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
	// 引入
	import {
		Swipe,
		SwipeItem
	} from 'vant';
	export default {

		name: 'DetailsSlideshow',
		components: {
			'van-swipe': Swipe,
			'van-swipe-item': SwipeItem

		},
		// 接收
		props: {
			detailsSlideshowHandle: {
				type: Object,
				required: true
			}

		}
	}
</script>

<style scoped>

</style>
