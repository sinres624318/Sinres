<template>
    <div class="myAttention-bottom">
        <div class="myAttention-bottom-title">
          <div class="strip"></div>
          你可能喜欢的商品
          <div class="strip"></div>
        </div>
      <div class="myAttention-bottom-particulars" >
        <div class="myAttention-bottom-particulars-unit" v-for="item in list">
        <img :src="item.img" alt="">
        <p>{{item.text}}</p>
        <span>{{item.price}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myAttentionBottom",
            data() {
              return{
                list:[
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128Gfdg dfg fdg fd gfgdfsgsdf',
                    price:'￥2999'
                  },
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128G',
                    price:'￥2999'
                  },
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128G',
                    price:'￥2999'
                  },
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128G',
                    price:'￥2999'
                  },
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128G',
                    price:'￥2999'
                  },
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128G',
                    price:'￥2999'
                  },
                  {
                    img:'../../../static/img/myAttention/2.png',
                    text:'Apple 苹果 Iphone XR 手机 白色 全网通 128G',
                    price:'￥2999'
                  }
                ]

            }
          }
    }
</script>

<style scoped>

</style>
