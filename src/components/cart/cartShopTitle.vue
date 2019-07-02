<template>
  <div :class="[shopCheck?'checked':'' ,'shop-title-wrap']">
    <div
      @click="checkShopHandle"
      class="icon_select"></div>
    <div class="shop-photo"></div>
    <div class="shop-title" v-if="title">{{title}}</div>
    <div class="notice">
      <i></i>
      <span>以免运费</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cartShopTitle",
    props: {
      title: {
        type: String,
        required: true
      },
      shopCheck: {
        type: Boolean,
        required: true
      },
      sID: {
        type: Number,
        required: true
      }
    },
    methods: {
      checkShopHandle() {
        this.$store.commit('shopAllCheckHandle',this.sID)
      }
    }
  }
</script>

<style scoped>

</style>
