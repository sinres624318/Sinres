<template>
  <div class="sort-block">
    <div class="sort-block-item ">
      <span>综合</span>
    </div>
    <div class="sort-block-item">销量</div>
    <div :class="['sort-block-item', 'price-sort ',flag?'focus-bottom':'focus-top']" @click="priceSortHandle">
      <span>价格</span>
    </div>
    <div class="sort-block-item">
      <span>筛选</span>
      <i class="filtration"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sortBlock",
    data() {
      return {
        flag: true
      }
    },
    methods: {
      priceSortHandle() {
        this.flag = !this.flag;
      }
    }
  }
</script>

<style scoped>

</style>
