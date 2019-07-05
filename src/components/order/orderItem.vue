<template>
  <div class="order-item">
    <OrderTitle :orderTitle="order"></OrderTitle>
    <OrderContent :orderContent="order"></OrderContent>
    <OrderButton :orderContent="order"></OrderButton>
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
    },
    props: {
      order: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
