<template>
	<div class="details-mask" v-show="show" @click="changeShow">
		<DetailsMaskContent></DetailsMaskContent>
	</div>
</template>

<script>
	import DetailsMaskContent from './detailsMaskContent'
	export default {
		name: "DetailsMask",
		data(){
			return{
				show:'',
			}
		},
		components:{
			DetailsMaskContent
		},
		created() {
			this.Observer.$on("change",(val)=>{
				this.show=val
				console.log(this.show)
			})
		},
		methods:{
			changeShow(){
				this.show=!this.show;
				this.Observer.$emit("aa",this.show)
			}
		}
		
		}

</script>


<style>
</style>
