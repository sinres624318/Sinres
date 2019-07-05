<template>
  <div class="classify-content-right">

    <div class="classify-content-right-chunk" v-for="(item,index) in right" v-if="Num==index">
      <img :src="item.banner" alt="" class="classify-content-right-chunk-banner">
    <div class="classify-content-right-modul" v-for="(a,index) in item.rightList">
      <h4>{{a.title}}</h4>
      <ul>
        <li v-for="small in a.rightSmall">
          <img :src="small.img" @click="clickHandel(small.productTypeID)">
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
        right:{
          type:Array,
        required:true
        }
    },
      created() {
          this.Observer.$on("handel",(val)=>{
            this.Num=val
          });
      },
      methods:{
          clickHandel(ID){
            this.$router.push({
              name:'ProductList',
              params:{productType:ID}
            });
          },

      }
    }
</script>

<style scoped>

</style>
