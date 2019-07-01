<template>
    <ul class="my-vouchers-all-type" v-if="show" @click="displayAllType">
      <li>
        全部类型
      </li>
      <li>
        信券
      </li>
      <li>
        锐券
      </li>
      <li>
        物流券
      </li>
      <li>
        支付券
      </li>
      <li>
        拼购券
      </li>
      <li>
        快递券
      </li>
      <li>
        回收券
      </li>
    </ul>
</template>

<script>
    export default {
        name: "myVouchersAllType",
      data(){
          return{
            show:true
          }
      },
      methods:{
        displayAllType(){
          this.$emit("sendAllType",false)
        }
      }
    }
</script>

<style scoped>

</style>
