<template>
    <div class="appliance-classify">
      <div class="appliance-classify-list">
        <div class="appliance-classify-item" v-for="(item,index) in applianceClassify.applianceClassify" :key="index" @click="handleSendType(item.productType)">
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
      props:{
        applianceClassify:{
          type:Object,
          required:true
        }
      },
      methods:{
        handleSendType(productType){
            this.$router.push({name:'ProductList',params:{'productType':productType}})
        }
      }
    }
</script>

<style scoped>

</style>
