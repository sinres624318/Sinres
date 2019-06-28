<template>
    <div class="classify-content-left " ref="wrapper">
      <div class="wrapper">
      <ul >
        <li v-for="(item,index) in info" ref="index"  :class="{unique :isActive==index}" @click="amendHandel(index)">{{item}}</li>
      </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "classifyContentLeft",
      props:{
          info:Array,
          default:''
          },
      data(){
          return{
            isActive:0,
          }
      },
      methods:{
        amendHandel(index){
            this.isActive=index
          this.Observer.$emit("handel",index)
          }
      }
    }
</script>

<style scoped>

</style>
