<template>
    <div class="define-order">
      <DefineOrderHeader/>
      <DefineOrderAddress v-if="defineOrderInfo.address" :sendAddress="defineOrderInfo"/>
      <DefineOrderInfo v-if="defineOrderInfo.product" :sendDefineOrder="defineOrderInfo"/>
      <Loading v-if="!defineOrderInfo.product"/>
    </div>
</template>

<script>
  import DefineOrderHeader from './../components/defineOrder/defineOrderHeader'
  import DefineOrderAddress from './../components/defineOrder/defineOrderAddress'
  import DefineOrderInfo from './../components/defineOrder/defineOrderInfo'
  import Loading from './../components/common/loading'
    export default {
        name: "defineOrder",
        components:{
          DefineOrderHeader,
          DefineOrderAddress,
          DefineOrderInfo,
          Loading
        },
      data(){
          return{
            defineOrderInfo:{}
          }
      },
      created() {
          this.axios.post("http://10.35.162.3:9005/cart/payord/",{
            "token":"123456",
            "order_list":[

                '1001','13445'

            ],
            "total":2233,
            "paypassword":"564321"
        })
            .then((data)=>{
              this.defineOrderInfo = data.data;
              console.log(data)
            })
            .catch((err)=>{
              console.log(err)
            })
      },
      mounted() {

      }
    }
</script>
<style src="./../../static/css/defineOrder.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
