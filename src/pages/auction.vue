<template>
    <div class="auction">
      <AuctionHeader :sendauctionInfo="auctionInfo" @receiveInfo="handleReceive"/>
      <AuctionMain v-if="auctionInfo.auction" :sendAuctionType="auctionType"/>
      <Loading v-if="!auctionInfo.auction"/>
    </div>
</template>

<script>
  import AuctionHeader from './../components/auction/auctionHeader'
  import AuctionMain from './../components/auction/auctionMain'
  import Loading from './../components/common/loading'
  import {auctionurl} from "./../api/url";

  export default {
        name: "auction",
        components:{
          AuctionHeader,
          AuctionMain,
          Loading
        },
      data(){
          return{
            auctionInfo:{},
            auctionType:{}
          }
      },
      created() {
          // this.axios.get("https://www.easy-mock.com/mock/5d16dfa8b3e080603f1d5da4/example/auction")
        this.axios.get(auctionurl)
            .then((data)=>{
              this.auctionInfo = data.data;
              this.auctionType = data.data.auction
              console.log(this.auctionInfo)
            })
            .catch((err)=>{
              console.log(err)
            })
      },
      methods:{
        handleReceive(val){
          this.auctionType = val
        }
      }
    }
</script>

<style src="./../../static/css/auction.css"></style>
<style src="./../../static/font/iconfont.css"></style>
<style scoped>

</style>
