<template>
  <div class="mine-cell">
    <div class="rel-container" id="mineOrder">
      <div
        v-for="(item,index) in list"
        :key=index
        :class="['mine-order-entrance',item.className]"
        @click="orderTypeClickHandle(item.index)">
        <i></i>
        <span>{{item.text}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineOrderCell",
    data() {
      return {
        list: [
          {
            className: 'type-unpay',
            text: '待付款',
            index:1
          },

          {
            className: 'type-unrecieve',
            text: '待收货',
            index:2
          },

          {
            className: 'type-consult',
            text: '已完成',
            index:3
          },

          {
            className: 'type-orders',
            text: '全部订单',
            index:0
          },

        ]
      }
    },
    methods: {
      orderTypeClickHandle(index) {
        this.$router.replace({name: 'AllOrder', params: {currentIndex: index}})
      }
    }
  }
</script>

<style scoped>

</style>
