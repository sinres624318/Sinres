<template>
    <div class="classify-content-left " >
      <ul >
        <li v-for="(item,index) in left" ref="index"  :class="{unique :isActive==index}" @click="amendHandel(index)">{{item}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "classifyContentLeft",
      props:{
          left: {
            type:Array,
            required:true
          }
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
