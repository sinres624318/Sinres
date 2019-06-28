<template>
    <div class="reachar-item">
      <img src="../../../static/img/reacharge/1.jpg" alt="">
      <div class="reachar-item-choose">
        <ul>
          <li v-for="(item,index) in list" @click="styleHandel(index)" :class="{unique:num==index}">{{item}}</li>
        </ul>
      </div>
    </div>

</template>

<script>
    export default {
        name: "reacharItem",
      data(){
          return{
            list:["充话费","充流量","加油卡"],
            num:0,
            photo:''
          }
      },
      methods:{
          styleHandel(index){
             this.num=index;
            this.Observer.$emit("handel",this.num);
          },

      },
    }
</script>

<style scoped>

</style>
