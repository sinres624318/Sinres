<template>
	<div>
		<div class="details_ItemHeader">
      <NavBar>
        <template v-slot:left>
          <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
        </template>
        <template v-slot:title>
          <div class="title">商品评价</div>
        </template>
        <template v-slot:right>
          <div class="right iconfont" >&#xe670;</div>
        </template>
      </NavBar>
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
  import NavBar from '../../components/common/navBar'
	export default{
		name:'DetailsItemHeader',
    components:{
      NavBar
    },
		data(){
			return{
				
			}
		},
		methods:{
      backClickHandle(){
				this.$router.back();
			}
		}
		
		
		
		
		
		
		
		
		
		
	}
</script>

<style>
</style>
