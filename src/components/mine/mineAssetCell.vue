<template>
  <div class="my-cell">
    <div class="rel-container" id="myAsset">
      <div class="assets-item">
        <router-link
          tag="tag"
          :to="{name:'MyVouchers'}"
          class="assets-item-val">
          <span class="assets-val">0</span>
          <span class="assets-unit">张</span>
        </router-link>
        <div class="assets-item-key">京东券</div>
      </div>
      <div class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">23165.16</span>
          <span class="assets-unit">元</span>
        </div>
        <div class="assets-item-key">白条额度</div>
      </div>
      <div class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">3185</span>
          <span class="assets-unit">个</span>
        </div>
        <div class="assets-item-key">京豆</div>
      </div>
      <div class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">0</span>
          <span class="assets-unit">元</span>
        </div>
        <div class="assets-item-key">红包</div>
      </div>
      <div class="assets-item">
        <div class="assets-item-val mine-asset"></div>
        <div class="assets-item-key">我的资产</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mineAssetCell"
    }
</script>

<style scoped>

</style>
