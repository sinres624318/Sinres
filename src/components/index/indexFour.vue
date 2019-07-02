<template>
  <div class="exhibition-item exhibition-item-four">
    <div class="exhibition-item-title"></div>
    <div class="exhibition-four">
      <div class="exhibition-four-one exhibition-con-item">
        <div class="exhibition-con-item">
            <a href="" v-for="item in indexFour.exhibitionconitem">
              <div class="exhibition-title">
                <strong>{{item.text1}}</strong>
                <p>{{item.text2}}</p>
              </div>
              <img v-if="item.Img" :src="item.Img" alt="">
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexFour",
      props:{
        indexFour:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
