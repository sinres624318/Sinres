<template>
    <ul class="define-order-info-shop-product">
      <li v-for="(item,index) in product">
        <div class="define-order-info-shop-product-img">
          <img :src="item.img">
        </div>
        <div class="define-order-info-shop-product-title">{{item.title}}</div>
        <p class="define-order-info-shop-product-standard">{{item.standard}}</p>
        <p class="define-order-info-shop-product-price">￥{{item.price}}</p>
        <div class="define-order-info-shop-product-count-box">
          <div class="define-order-info-shop-product-count">
            <span class="define-order-info-shop-product-count-add">
              <img src="./../../../static/img/defineOrder/min.png" alt="">
            </span>
            <input class="define-order-info-shop-product-count-num" type="tel" value="1">
            <span class="define-order-info-shop-product-count-min">
              <img src="./../../../static/img/defineOrder/add.png" alt="">
            </span>
          </div>
        </div>
        <ul class="define-order-info-shop-product-server">
          <li>
            <div class="define-order-info-shop-product-server-seven-img">
              <img src="./../../../static/img/defineOrder/sevenDay.png" alt="">
            </div>
            <span>支持7天无理由退货（激活后不支持）</span>
          </li>
          <li>
            <div class="define-order-info-shop-product-server-explain-img">
              <img src="./../../../static/img/defineOrder/explain.png" alt="">
            </div>
            <span>价格说明</span>
          </li>
        </ul>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "defineOrderInfoShopProduct",
        data(){
          return{
            product:[
              {
                img:"./../../../static/img/defineOrder/product-01.png",
                title:"一加 OnePlus 7 Pro 2K+90Hz 流体屏 骁龙855旗舰 4800万超广角三摄 8GB+256GB超大内存",
                standard:"0/600kg/件，星雾蓝，8GB 256GB",
                price:4499
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
