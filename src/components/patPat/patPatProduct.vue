<template>
  <div class="woolProductLists">
    <div class="woolProduct" v-for="(item,index) in brilliant" :key='index'>
      <a href="#">
        <div class="woolProductImg">
          <img :src="item.img" alt="商品">
        </div>
        <div class="woolProductBottom">
          <p>{{item.describe}}</p>
          <div class="woolProductPrice">
            <div class="woolProNewPic">
              ￥
              <span>{{item.price}}</span>.00
            </div>
            <!-- <div class="woolProOldPic">
              <del>{{item.oldPrice}}</del>
            </div> -->
          </div>
          <!-- <div class="woolProductEvaluate">
            <span>{{item.evaluate}}</span>
            <span>{{item.evaluateRate}}</span>
          </div> -->
          <div class="toCardImg">
            <a href="#">
              <img src="../../../static/img/wool/woolToCartImg.png" alt>
            </a>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
    name:'patPatProduct',
    data(){
        return{
            brilliant:[
                {
                    productID: '1',
                    img:'./../../../static/img/wool/wool-product1.png',
                    describe:'满199减120三只松鼠白玉川式花生酥135g四川特产',
                    price:'18',
                },
                {
                    productID: '2',
                    img:'./../../../static/img/wool/wool-product1.png',
                    describe:'满199减120三只松鼠白玉川式花生酥135g四川特产',
                    price:'18',
                },
                {
                    productID: '3',
                    img:'./../../../static/img/wool/wool-product1.png',
                    describe:'满199减120三只松鼠白玉川式花生酥135g四川特产',
                    price:'18',
                },
                 {
                    productID: '3',
                    img:'./../../../static/img/wool/wool-product1.png',
                    describe:'满199减120三只松鼠白玉川式花生酥135g四川特产',
                    price:'18',
                }
            ]
        }
    }
}
</script>
<style scoped>
.woolProductLists{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 10px;
    align-items: center;
}
.woolProduct {
  width: 48%;
  margin-right: 10px;
  margin-left: 10px;
  background: #fff;
  position: relative;
  margin-bottom: 10px;
    margin: 0 auto 18px;
  padding-bottom: 20px;
}
.woolProductBottom{
  padding: 0 20px;
}
.woolProductBottom>p{
  margin-top: 16px;
  font-size: 30px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  height: 68px;
  line-height: 35px;
}
.woolProductPrice{
    display: flex;
    margin-top: 22px;
}
.woolProNewPic{
    color: red;
    font-size: 20px;
}
.woolProNewPic>span{
    font-size: 30px;
}
.woolProOldPic{
    font-size: 22px;
    margin-left: 16px;
}
.woolProductEvaluate{
    font-size: 20px;
    margin-top: 18px;
}
.toCardImg{
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 50%;
    position: absolute;
    bottom: 18px;
    right: 35px;
}
</style>

