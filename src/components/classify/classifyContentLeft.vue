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
  import BScroll from 'better-scroll'
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
      mounted() {
        let scroll = new BScroll('.wrapper',{
          scrollY: true,
          click: true
        })
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
