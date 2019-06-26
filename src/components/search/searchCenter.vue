<template>
  <div class="search-Center">
    <h3>热门搜索</h3>
    <div class="search-Search">
      <p v-for="item in searchSeacherText"  :style="{'color':item.color}">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "searchCenter",
      data(){
          return{
            searchSeacherText:[
              {
                text:'华为手环',
                "color":"red",
              },
              {
                text:'电动牙刷',
                "color":"red",
              }
              ,
              {
                text:'学习机',
                "color":"red",
              },
              {
                text:'游戏本'
              },
              {
                text:'晾衣架'
              },
              {
                text:'容声冰箱'
              },
              {
                text:'微波炉'
              },
              {
                text:'游戏本'
              },
              {
                text:'晾衣架'
              },
              {
                text:'容声冰箱'
              },
              {
                text:'微波炉'
              },
              {
                text:'游戏本'
              },
              {
                text:'晾衣架'
              },
              {
                text:'容声冰箱'
              },
              {
                text:'微波炉'
              }
            ]
          }
      }
    }
</script>

<style scoped>

</style>
