<template>
  <div class="likeIntroduceLists">
    <div class="likeIntroduceProduct" v-for="(item,index) in patPatLikeIntroduceProductHandle.likeintroduce " :key="index">
      <a href="#">
        <div class="likeIntroduceProductImg">
          <img :src="item.img" alt="猜你喜欢的商品">
        </div>
        <div class="likeProductDescribe">
          <p>{{item.describe}}</p>
          <i>￥</i>
          <span>{{item.price}}</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "patPatLikeIntroduceProduct",
  props:{
    patPatLikeIntroduceProductHandle:{
      type:Object,
      required:true
    }
  }
};
</script>
<style scoped>
.likeIntroduceLists {
  display: flex;
}
.likeIntroduceProduct {
  width: 220px;
  height: 362px;
  margin-top: 4px;
  overflow: hidden;
  background-color: #fff;
  margin-right: 4px;
  display: flex;
}
.likeIntroduceProductImg {
  width: 200px;
  height: 200px;
}
.likeProductDescribe {
  padding: 10px 10px 0px 10px;
}
.likeProductDescribe > p {
  width: 192px;
  height: 65px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #000000;
  font-size: 26px;
  text-align: left;
  font-weight: normal;
  line-height: 32px;
  text-overflow: ellipsis;
  display: -webkit-box;
  margin-bottom: 28px;
  -webkit-box-orient: vertical;
}
.likeProductDescribe > i {
  color: red;
  font-size: 15px;
}
.likeProductDescribe > span {
  color: red;
  font-size: 22px;
}
</style>
