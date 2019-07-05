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
      },
      mounted() {
          console.log(this.sendAuctionType)
      }
    }
</script>

<style scoped>

</style>
