<template>
	<div class="details_recommend">
		<!-- 头部 -->
		<div class="details_recommend_header">
			<a>商品介绍</a>
			<a>规格参数</a>
			<a>售后保障</a>
		</div>
		
		<!-- 三包 -->
		<div class="details_recommend_threeSafeguard">
			<p>{{serviceContent.threeSafeguard}}</p>
		</div>
		
		<!-- 服务 -->
		<div class="details_recommend_servicePromise">
			<div class="details_recommend-class">
				<img src="../../../static/img/Details/line.gif" alt="">
				<h3>服务承诺</h3>
				<img src="../../../static/img/Details/line.gif" alt="">
			</div>
			<p>{{serviceContent.servicePromise}}</p>
		</div>
		<!-- 权利 -->
		<div class="details_recommend_right">
			<div class="details_recommend-class">
				<img src="../../../static/img/Details/line.gif" alt="">
				<h3>权利声明</h3>
				<img src="../../../static/img/Details/line.gif" alt="">
			</div>
			<p>
          京东商城上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是京东商城重要的经营资源，未经许可，禁止非法转载使用。
          本站商品信息均来自于厂商，其真实性、准确性和合法性由信息拥有者（厂商）负责。本站不提供任何保证，并不承担任何法律责任。
		    </p>
		</div>
		
		
		<!-- 价格 -->
		  
		  <div class="details_recommend_priceStatement">
			  <div class="details_recommend-class">
				<img src="../../../static/img/Details/line.gif" alt="">
				<h3>价格说明</h3>
				<img src="../../../static/img/Details/line.gif" alt="">
			</div>
			<p>{{serviceContent.priceStatement}}</p>
			  
		  </div>
		  
		  
	</div>
</template>

<script>
	export default{
		name:'DetailsRecommend',
		data(){
			return{
				
				
				  serviceContent: {
      threeSafeguard: "本产品全国联保，享受三包服务，质保期为：1年质保如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！(注:如厂家在商品介绍中有售后保障的说明,则此商品按照厂家说明执行售后保障服务。)",
      servicePromise: "京东商城向您保证所售商品均为正品行货，京东自营商品开具机打发票或电子发票。凭质保证书及京东商城发票，可享受全国联保服务（奢侈品、钟表除外；奢侈品、钟表由京东联系保修，享受法定三包售后服务），与您亲临商场选购的商品享受相同的质量保证。京东商城还为您提供具有竞争力的商品价格和运费政策，请您放心购买！注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！",
      priceStatement: "1.京东价：京东价为商品的销售价，是您最终决定是否购买商品的依据。2.划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价"
    }

				
				
				
				
				
			}
		},
		
		
		
		
		
		
		
		
		
	}
	
</script>

<style>
</style>







