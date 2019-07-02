<template>
  <div class="exhibition-item exhibition-item-three">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-three">
      <div class="exhibition-three-one">
        <div class="exhibition-three-one-l" v-for="item in indexThree.yard.contenttop" :key="item">
          <div class="exhibition-three-one-title">
            <span>{{item.contentTitle}}</span>
            <p>{{item.contentDescribe}}</p>
          </div>
          <div class="exhibition-three-one-con">
            <a href="" v-for="items in item.imgs" :key="items">
              <img v-if="items" :src="items" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="exhibition-three-two exhibition-con-item">
        <div class="exhibition-con-item">
          <a href="" v-for="(item,index) in indexThree.yard.contentbottom" :key="index">
            <div class="exhibition-title">
              <strong>{{item.contentTitle}}</strong>
              <p>{{item.contentDescribe}}</p>
            </div>
            <img v-if="item.imgs" :src="item.imgs" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexThree",
      props:{
        indexThree:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
