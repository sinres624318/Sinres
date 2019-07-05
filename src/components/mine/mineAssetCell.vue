<template>
  <div class="my-cell">
    <div class="rel-container" id="myAsset">
      <div class="assets-item">
        <router-link
          tag="div"
          :to="{name:'MyVouchers'}"
          class="assets-item-val">
          <span class="assets-val">{{assetInfo.vouchers}}</span>
          <span class="assets-unit">张</span>
        </router-link>
        <div class="assets-item-key">京东券</div>
      </div>
      <router-link
        tag="div"
        :to="{name:'MyAssets'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">{{assetInfo.balance}}</span>
          <span class="assets-unit">元</span>
        </div>
        <div class="assets-item-key">余额</div>
      </router-link>
      <router-link
        tag="div"
        :to="{name:'MyAssets'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">{{assetInfo.integral}}</span>
          <span class="assets-unit">个</span>
        </div>
        <div class="assets-item-key">积分</div>
      </router-link>
      <router-link
        tag="div"
        :to="{name:'MyAssets'}"
        class="assets-item">
        <div class="assets-item-val">
          <span class="assets-val">{{assetInfo.redPacket}}</span>
          <span class="assets-unit">元</span>
        </div>
        <div class="assets-item-key">红包</div>
      </router-link>
      <router-link
        tag="div"
        :to="{name:'MyAssets'}"
        class="assets-item">
        <div class="assets-item-val mine-asset"></div>
        <div class="assets-item-key">我的资产</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mineAssetCell",
    props: {
      assetInfo: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style scoped>

</style>
