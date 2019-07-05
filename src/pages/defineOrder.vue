<template>
    <div class="define-order">
      <DefineOrderHeader/>
      <DefineOrderAddress/>
      <DefineOrderInfo/>
    </div>
</template>

<script>
  import DefineOrderHeader from './../components/defineOrder/defineOrderHeader'
  import DefineOrderAddress from './../components/defineOrder/defineOrderAddress'
  import DefineOrderInfo from './../components/defineOrder/defineOrderInfo'
    export default {
        name: "defineOrder",
        components:{
          DefineOrderHeader,
          DefineOrderAddress,
          DefineOrderInfo
        },
      data(){
          return{
            defineOrderInfo:{}
          }
      },
      created() {
          let a=this.$route;
          console.log(a);
          this.axios.get("https://www.easy-mock.com/mock/5d16dfa8b3e080603f1d5da4/example/defineOrder")
            .then((data)=>{
              console.log(data);
              this.defineOrderInfo = data.data;
              console.log(this.defineOrderInfo)
            })
            .catch((err)=>{
              console.log(err)
            })
      }
    }
</script>
<style src="./../../static/css/defineOrder.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
