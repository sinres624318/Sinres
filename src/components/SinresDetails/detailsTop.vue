<template>
	<div class="detailsTopHeader">
      <NavBar>
        <template v-slot:left>
          <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
        </template>
        
        <template v-slot:right>
          <div class="right iconfont" >&#xe670;</div>
        </template>
      </NavBar>	
	</div>
</template>

<script>
  import NavBar from '../../components/common/navBar'
	export default{
		name:'DetailsTop',
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
	.detailsTopHeader{
	}
	/*NavBar start*/
	.nav-bar {
	  height: 90px;
	  position: fixed;
	  top: 0;
	  left: 0;
	  background: #fff;
	  z-index: 99;
	  width: 100%;
	}
	.nav-bar .title {
	  position: absolute;
	  left: 0;
	  height: 100%;
	  line-height: 90px;
	  text-align: center;
	  width: 100%;
	  padding: 0 80px;
	  font-size: 32px;
	}
	.left {
	  position: absolute;
	  left: 0;
	  height: 100%;
	  width: 80px;
	  line-height: 90px;
	  text-align: center;
	  top: 50%;
	  transform: translateY(-50%);
	  z-index: 99;
	  font-size: 66px;
	}
	.right {
	  position: absolute;
	  right: 0;
	  height: 100%;
	  text-align: center;
	  line-height: 90px;
	  width: 80px;
	  top: 50%;
	  transform: translateY(-50%);
	  z-index: 99;
	  font-size: 40px;
	}
</style>
