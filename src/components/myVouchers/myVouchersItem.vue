<template>
  <div class="my-vouchers-list">
    <div class="my-vouchers-item" v-for="(item,index) in vouchers" :key="index">
      <div class="my-vouchers-item-left">
        <div class="my-vouchers-item-left-top">
          <i>￥</i>
          <span>{{item.PreferentialPrice}}</span>
        </div>
        <div class="my-vouchers-item-left-deep">
          满{{item.upToPrice}}元可用
        </div>
      </div>
      <div class="my-vouchers-item-right">
        <div class="my-vouchers-item-title">
            {{item.describe}}
        </div>
        <div class="my-vouchers-item-time">{{item.time}}</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "myVouchersItem",
    data(){
      return{
        vouchers:[
          {
            PreferentialPrice:20,
            upToPrice:500,
            describe:"限信锐商城购买实物商品使用（黄金、海囤全球、众筹、信锐、代购等等）",
            time:"2019.06.20-2019.06.28"
          },
          {
            PreferentialPrice:20,
            upToPrice:500,
            describe:"限信锐商城购买实物商品使用（黄金、海囤全球、众筹、信锐、代购等等）",
            time:"2019.06.20-2019.06.28"
          },
          {
            PreferentialPrice:20,
            upToPrice:500,
            describe:"限信锐商城购买实物商品使用（黄金、海囤全球、众筹、信锐、代购等等）",
            time:"2019.06.20-2019.06.28"
          },
          {
            PreferentialPrice:20,
            upToPrice:500,
            describe:"限信锐商城购买实物商品使用（黄金、海囤全球、众筹、信锐、代购等等）",
            time:"2019.06.20-2019.06.28"
          },
          {
            PreferentialPrice:20,
            upToPrice:500,
            describe:"限信锐商城购买实物商品使用（黄金、海囤全球、众筹、信锐、代购等等）",
            time:"2019.06.20-2019.06.28"
          },
          {
            PreferentialPrice:20,
            upToPrice:500,
            describe:"限信锐商城购买实物商品使用（黄金、海囤全球、众筹、信锐、代购等等）",
            time:"2019.06.20-2019.06.28"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
