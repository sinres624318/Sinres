<template>
    <div class="define-order-address">
      <ul class="define-order-userName" v-for="(item,index) in sendAddress.address">
        <li>
          {{item.userName}}
          {{item.userTel}}
        </li>
        <li>{{item.userAddress}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "defineOrderAddress",
        data(){
          return{

          }
        },
      props:{
        sendAddress:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
