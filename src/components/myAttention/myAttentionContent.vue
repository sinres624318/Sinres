<template>
    <div class="myAttention-content">
      <div class="myAttention-content-top">
        <span><a href="#"  onclick=" return false; " @click="appearHander(0)" :class="{myAttentionA:show==true}">商品</a></span>
        <span><a href="#"  onclick=" return false; " @click="appearHander(1)" :class="{myAttentionA:show==false}">商铺</a></span>
      </div>
      <div class="myAttention-content-middle">
        <span>共计<i>1</i>件商品</span>
        <a href="#"  onclick=" return false; ">编辑</a>
      </div>
      <div class="myAttention-content-bottom" v-for="item in list.myAttentionList" v-if="num==0">
        <img :src="item.img" alt="">
        <div class="myAttention-content-bottom-right">
          <p class="myAttention-content-bottom-right-p1">{{item.text}}</p>
          <div class="myAttention-content-bottom-right-introduce">
            <span>颜色:{{item.color}}</span>
            <span>尺寸:{{item.size}}</span>
          </div>
          <p class="myAttention-content-bottom-right-p2">
            <span>{{item.price}}</span>
            <span>{{item.examine}}</span>
          </p>
        </div>

      </div>
      <div class="myAttention-content-shop" v-for="items in list.myAttentionShop" v-if="num==1">
        <img :src="items.img" >
        <div class="myAttention-content-shop-son">
          <p>{{items.name}}</p>
          <span>{{items.type}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myAttentionContent",
      data(){
          return{
            show:true,
            num:0
          }
      },
      props:{
        list:{
          type:Object,
          required:true
        }
      },
      methods:{
        appearHander(Num){
          this.num=Num;
          if(this.show==true){
            this.show=false;
          }else{
            this.show=true;
          }

        }
      }
    }
</script>

<style scoped>

</style>
