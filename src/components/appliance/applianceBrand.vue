<template>
    <div class="appliance-brand">
      <ApplianceAd></ApplianceAd>
      <div class="appliance-brand-list">
        <div class="appliance-brand-item" v-for="(item,index) in brand.brand" :key="index">
          <h3>{{item.title}}</h3>
          <h4>{{item.describe}}</h4>
          <div class="appliance-brand-item-img">
            <img :src="item.img">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import ApplianceAd from './applianceAd'

  export default {
        name: "applianceBrand",
    components:{
      ApplianceAd
    },
    props:{
      brand:{
        type:Object,
        required:true
      }
    }
    }
</script>

<style scoped>

</style>
