<template>
	<div class="details_evaluation-content">
		<!-- 评价内容 -->
		<div class="details_evaluation_content" v-for="(item,index) in detailsItemContent.productCommentList
">
			
			<div class="details_evaluation_content_top">
        <div>
				<img src="../../../static/img/Details/head_portrait.png" class="head_portrait">
				<span>{{item.UserName}}</span>
				<!-- 要改 -->
				<img src="../../../static/img/Details/star.gif" class="details_evaluation_content_stars">
        </div>
        <div>
				<p>{{item.CommentTime}}</p>
        </div>
			</div>

			<div class="details_evaluation_content_main">
				<!-- 内容 -->
				{{item.content}}
			</div>
      <div style="height:1.6rem"></div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:'DetailsItemContent',
		// 接收
		props: {
			detailsItemContent: {
				type: Object,
				required: true
			}
		
		},
		/*
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
		*/
		
		
		
	}
</script>

<style>
</style>
