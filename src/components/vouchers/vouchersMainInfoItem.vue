<template>
    <div class="vouchers-main-info-item">
      <div class="vouchers-main-info-item-single" v-for="(item,index) in vouchersInfo.ledList" :key="index" @click="sendHandleVouchers">
        <h3>{{item.vouchersUseCondition}}</h3>
        <span>满{{item.minusPrice}}元可以使用</span>
        <p>{{item.title}}</p>
        <i>立即领取</i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "vouchersMainInfoItem",

      props:{
        vouchersInfo:{
          type:Object,
          required:true
        }
      },
      methods:{
        sendHandleVouchers(){
          this.show = !this.show
          this.$emit("sendVouchers",this.show)
        }
      },
      data(){
          return{
            show : false
          }
      }
    }
</script>

<style scoped>

</style>
