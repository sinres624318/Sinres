<template>
    <div class="recharge-content">
      <div class="recharge-content-first" v-if="show==0">
        <div class="recharge-content-first-ul">
      <ul>
        <li v-for="item in list">
          {{item.price}}
          <i>{{item.text}}</i>
       </li>
      </ul>
        </div>
        <div class="recharge-content-first-favorable">
          <p>优惠卷</p>
          <p>京豆</p>
        </div>
        <div class="recharge-content-first-buy">
          <span>合计:￥0.00</span>
          <a href="#">立即下单</a>
        </div>
      </div>
      <div class="recharge-content-two"  v-if="show==1">
        <div class="recharge-content-first-ul">
        <ul>
          <li v-for="item in lists">{{item}}</li>
        </ul>
        </div>
        <div class="recharge-content-first-favorable">
          <p>优惠卷</p>
          <p>京豆</p>
        </div>
        <div class="recharge-content-two-hint">
          因可能存在系统缓存、页面更新导致价格变动异常等不确定性情况出现，如您发现活动商品标价或促销信息有异常，请您立即联系我们，以便我们及时补正。
        </div>
        <div class="recharge-content-two-buy">
          <span>合计:￥0.00</span>
          <a href="#">立即下单</a>
        </div>
      </div>
    </div>
</template>

<script>
    import indexHender from "../index/indexHender";

    export default {
        name: "rechargeContent",
      data(){
          return{
            list:[{price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"},
              {price:"10元",text:"售价:9.96"}],
            lists:["30M","50M","100M","200M","500M","1G"],
            show:0
          }
      },
      created() {
          indexHender:{
            this.Observer.$on("handel",(val)=>{
              this.show=val;
            })

        }
      }
    }
</script>

<style scoped>

</style>
