<template>
  <div class="classify-content-right">

    <div class="classify-content-right-chunk" v-for="(item,index) in content" v-if="Num==index">
    <h4>{{item.title}}</h4>
    <div class="classify-content-right-modul" >
      <ul>
        <li v-for="small in item.rightList">
          <img :src="small.img" alt="">
          <span>{{small.text}}</span>
        </li>
      </ul>
    </div>
  </div>
    </div>

</template>

<script>

    export default {
        name: "classifyContentRight",
      data(){
        return{
          Num:0
        }
      },
      props:{
        content:Array,
        default:''
      },
      created() {
          this.Observer.$on("handel",(val)=>{
            this.Num=val
          });
      },
    }
</script>

<style scoped>

</style>
