<template>
    <div class="auction-main">
      <AuctionList :sendType="sendAuctionType"/>
    </div>
</template>

<script>
  import AuctionList from './auctionList'
    export default {
        name: "auctionMain",
        components:{
          AuctionList
        },

      props:{
        sendAuctionType:{
          type:Array,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
