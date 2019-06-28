<template>
    <div class="auction">
      <AuctionHeader/>
      <AuctionMain/>
    </div>
</template>

<script>
  import AuctionHeader from './../components/auction/auctionHeader'
  import AuctionMain from './../components/auction/auctionMain'
    export default {
        name: "auction",
        components:{
          AuctionHeader,
          AuctionMain
        }
    }
</script>

<style src="./../../static/css/auction.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
