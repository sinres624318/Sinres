<template>
  <div class="my-vouchers-shadow" @click="handleShow">
  </div>
</template>

<script>
  export default {
    name: "myVouchersShadow",
    methods: {
      handleShow() {
        this.$emit("handleLetShow", false)
        this.$emit("handleStateShow",false)
        this.$emit("handleGranularityShow",false)
      }
    }
  }
</script>

<style scoped>

</style>
