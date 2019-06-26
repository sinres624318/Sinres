<template>
  <div class="order-item">
    <OrderTitle></OrderTitle>
    <OrderContent></OrderContent>
    <OrderButton></OrderButton>
  </div>
</template>

<script>
  import OrderTitle from './orderTitle'
  import OrderContent from './orderContent'
  import OrderButton from './orderButton'

  export default {
    name: "orderItem",
    components: {
      OrderTitle,
      OrderContent,
      OrderButton
    }
  }
</script>

<style scoped>

</style>
