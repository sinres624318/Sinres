<template>
  <div class="groupBuy-Class">
    <p>
      <span>拼购</span>
      <span>大家都在拼</span>
    </p>
    <div class="roupBuy-content">
      <div class="roupBuy-item">
        <router-link  to="" class="roupBuy-item-product" v-for="(item,index) in groupBuyClass.groupBuyEveryone" :key="index" >
          <div class="roupBuy-product">
            <div class="roupBuy-posre">
              <img :src="item.img" alt="">
            </div>
            <div class="roupBuy-product-text">{{item.describe}}</div>
            <div class="roupBuy-product-info">
              <div class="roupBuy-product-price">
                <i>&yen;</i>
                <span>{{item.price}}</span>
              </div>
              <div class="roupBuy-similarity">看相似</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "groupBuyClass",
    props:{
      groupBuyClass:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
