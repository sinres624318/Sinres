<template>
    <div class="myAttention-content">
      <div class="myAttention-content-top">
        <span><a href="#"  onclick=" return false; " @click="appearHander()" :class="{myAttentionA:show==true}">商品</a></span>
        <span><a href="#"  onclick=" return false; " @click="appearHander()" :class="{myAttentionA:show==false}">商铺</a></span>
      </div>
      <div class="myAttention-content-middle">
        <span>共计<i>1</i>件商品</span>
        <a href="#"  onclick=" return false; ">编辑</a>
      </div>
      <div class="myAttention-content-bottom" v-for="item in list">
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
    </div>
</template>

<script>
    export default {
        name: "myAttentionContent",
      data(){
          return{
            show:true,
            list:[
              {
                img:'../../../static/img/myAttention/1.png',
                text:'微软 (Microsoft) 微软SurfaceBook2二合一平板电脑笔记本十五英寸高清显示屏8G运行内存1T储存内存',
                color:'银色',
                size:'Inteli716G内存1T储存',
                price:'￥29999.0',
                examine:'查看相似'
              },
              {
                img:'../../../static/img/myAttention/1.png',
                text:'微软 (Microsoft) 微软SurfaceBook2二合一平板电脑笔记本十五英寸高清显示屏8G运行内存1T储存内存',
                color:'银色',
                size:'Inteli716G内存1T储存',
                price:'￥29999.0',
                examine:'查看相似'
              }
            ]
          }
      },
      methods:{
        appearHander(){
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
