<template>
  <div class="exhibition-item exhibition-item-three">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-three">
      <div class="exhibition-three-one">
        <div class="exhibition-three-one-l" v-for="(item,index) in indexThree.yard.contenttop" :key="index">
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
          <a href="" v-for="itemse in indexThree.yard.contentbottom" :key="itemse">
            <div class="exhibition-title">
              <strong>{{itemse.contentTitle}}</strong>
              <p>{{itemse.contentDescribe}}</p>
            </div>
            <img v-if="itemse.imgs" :src="itemse.imgs" alt="">
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
