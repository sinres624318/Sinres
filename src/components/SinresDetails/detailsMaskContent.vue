<template>
	<div class="details-mask-content">
		<div class="details-mask-content-header">
			<div>
				<img src="../../../static/img/Details/mask1.png" alt="">
			</div>
			
			<div class="details-mask-content-header-right">
				<div class="details-mask-content-header-right-first">
					<p style="color: red;display:inline-block; margin-right:200px;">￥1299.00</p>
					<div style="display:inline-block;font-size:20px;">×</div>
				</div>
				<p><span style="color: darkgray;">已选</span> 19款13.3英寸 八代i5 8G 256G灰,普通版,1个</p>
			</div>
		</div>
		
		<div>
			<p class="title_color">颜色</p>
			<div>
				<p v-for="(item,index) in list" :key='index' class="each_title">{{item}}</p>
			</div>
			
		</div>
		
		<div class="details-mask_top">
			<div>加入购物车</div>
			<div>立即购买</div>
		</div>
		
		
		
	</div>
</template>

<script>
	export default{
		name:'DetailsMaskContent',
		data(){
			return{
				changeValue:false,
				list:['17款MPXQ2CH/A-深空灰-128GB','18款MPXQ2CH/A-深空灰-128GB','19款MPXQ2CH/A-深空灰-128GB','新款MPXQ2CH/A-深空灰-128GB','未来款MPXQ2CH/A-深空灰-128GB','基础款MPXQ2CH/A-深空灰-128GB','sd款MPXQ2CH/A-深空灰-128GB']
			}
			
		},
	}
</script>

<style>
</style>
