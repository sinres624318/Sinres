<template>
	<div>
		<!-- 评价内容 -->
		<div class="details_evaluation_content" v-for="(item,index) in evaluate.comment">
			
			<div class="details_evaluation_content_top">
				<img :src="item.userHeaderPhoto" class="head_portrait">
				<span>{{item.userName}}</span>
				<!-- 要改 -->
				<img :src="item.stars" class="details_evaluation_content_stars">
				<p>{{item.time}}</p>
			</div>
			
			<div class="details_evaluation_content_main">
				<!-- 内容 -->
				{{item.content}}
			</div>
			
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'DetailsItemContent',
		
		data(){
			
			return{
				evaluate: {
					// 好评率
					rate: "97%",
					// 好评数
					number: "200+",
					
					// 评论
					comment: [ //2个对象
						{
							userHeaderPhoto: "../../../static/img/Details/head_portrait.png",
							userName: "j***e",
							//要改
							//stars: "int",
							stars: "../../../static/img/Details/star.gif",
							time: "2019-06-21",
							content:"顺风物流很快，快递小哥服务很好。衣服质量非常满意，尺码标准，纯棉面料，做工精细，试穿效果很理想，京东作活动时买的，物有所值。同时还要感谢客服人员热情和细致的服务，点赞！"
						},
						
						{
							userHeaderPhoto: "../../../static/img/Details/head_portrait.png",
							userName: "j***e",
							//要改
							//stars: "int",
							stars: "../../../static/img/Details/star.gif",
							time: "2019-06-22",
							content:"顺风物流很快，快递小哥服务很好。衣服质量非常满意，尺码标准，纯棉面料，做工精细，试穿效果很理想，京东作活动时买的，物有所值。同时还要感谢客服人员热情和细致的服务，点赞！"
						},
						
						
						{
							userHeaderPhoto: "../../../static/img/Details/head_portrait.png",
							userName: "j***e",
							//要改
							//stars: "int",
							stars: "../../../static/img/Details/star.gif",
							time: "2019-06-21",
							content:"顺风物流很快，快递小哥服务很好。衣服质量非常满意，尺码标准，纯棉面料，做工精细，试穿效果很理想，京东作活动时买的，物有所值。同时还要感谢客服人员热情和细致的服务，点赞！"
						},
						{
							userHeaderPhoto: "../../../static/img/Details/head_portrait.png",
							userName: "j***e",
							//要改
							//stars: "int",
							stars: "../../../static/img/Details/star.gif",
							time: "2019-06-21",
							content:"顺风物流很快，快递小哥服务很好。衣服质量非常满意，尺码标准，纯棉面料，做工精细，试穿效果很理想，京东作活动时买的，物有所值。同时还要感谢客服人员热情和细致的服务，点赞！"
						},
						{
							userHeaderPhoto: "../../../static/img/Details/head_portrait.png",
							userName: "j***e",
							//要改
							//stars: "int",
							stars: "../../../static/img/Details/star.gif",
							time: "2019-06-21",
							content:"顺风物流很快，快递小哥服务很好。衣服质量非常满意，尺码标准，纯棉面料，做工精细，试穿效果很理想，京东作活动时买的，物有所值。同时还要感谢客服人员热情和细致的服务，点赞！"
						},
						
						
						
						
						
					]
				}





			}
			
		}
		
		
		
	}
</script>

<style>
</style>
