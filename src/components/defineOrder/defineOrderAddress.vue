<template>
    <div class="define-order-address">
      <ul class="define-order-userName" v-for="(item,index) in address">
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
            address:[
              {
                userName:"小明",
                userTel:"138****2314",
                userAddress:"陕西西安市雁塔区丈八沟街道南窑头东区8排"
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
