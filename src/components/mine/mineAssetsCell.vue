<template>
  <div class="mine-cell">
    <div class="rel-container" id="mineFav">
      <router-link
        tag="div"
        :to="{name:'MyAttention'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">0</span>
        </div>
        <span class="assets-item-key">商品收藏</span>
      </router-link>
      <router-link
        tag="div"
        :to="{name:'MyAttention'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">0</span>
        </div>
        <span class="assets-item-key">店铺收藏</span>
      </router-link>
      <div class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">0</span>
        </div>
        <span class="assets-item-key">我的足迹</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineAssetsCell",
    created() {
      this.axios.post("http://10.35.162.133:9005/mine/collect/shop/",{
        "token":123456
      })
        .then((data)=>{
          console.log(data.data);
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }
</script>

<style scoped>

</style>
