<template>
    <div class="appliance-classify">
      <div class="appliance-classify-list">
        <div class="appliance-classify-item" v-for="(item,index) in applianceClassify">
          <div class="appliance-classify-item-img">
            <img :src="item.img">
          </div>
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applianceClassify",
      data(){
          return{
            applianceClassify:[
              {
                img:"./../../../static/applianceImg/applianceClassify-01.png",
                title:"空调馆"
              },
              {
                img:"./../../../static/applianceImg/applianceClassify-02.png",
                title:"小家电馆"
              },
              {
                img:"./../../../static/applianceImg/applianceClassify-03.png",
                title:"厨卫馆"
              },
              {
                img:"./../../../static/applianceImg/applianceClassify-04.png",
                title:"电视馆"
              },
              {
                img:"./../../../static/applianceImg/applianceClassify-05.png",
                title:"冰洗馆"
              }

            ]
          }
      }
    }
</script>

<style scoped>

</style>
