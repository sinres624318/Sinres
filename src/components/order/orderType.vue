<template>
  <div class="order-type">
    <div
      v-for="(item,index) in list"
      :key="index"
      :class="[item.className,index === currentIndex?'focus':'']"
      @click="orderTypeClickHandle(index)">
      {{item.text}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "orderType",
    data() {
      return {
        list: [
          {
            text: '所有订单',
            className: 'order-all'
          },
          {
            text: '待付款',
            className: 'order-obligation'
          },
          {
            text: '待收货',
            className: 'order-wait-receive'
          },
          {
            text: '已完成',
            className: 'order-finish'
          },
        ],
        currentIndex:this.$route.params.currentIndex
      }
    },
    methods:{
      orderTypeClickHandle(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>

</style>
