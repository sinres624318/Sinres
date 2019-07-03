<template>
  <div class="shippingAddressCenter-fist">
    <div v-if="shippingAddressCenter"  class="shippingAddressCenter" v-for="(item,index) in  shippingAddressCenter" :key="index">
      <div class="shippingAddressCenter-top">
        <div class="shippingAddressCenter-top-top" >
          <span @click=" handleChack(index)"  :class="{'active':num==index}"><img src="./../../../static/img/shippingAddress/40.png"/></span>
        </div>
        <div class="shippingAddressCenter-top-bottom">
          <h3>{{ item.name}}，<span>{{ item.phone}}</span></h3>
          <p>{{ item.text}}</p>
        </div>
      </div>
      <router-link tag="div" to="/editAddress" class="shippingAddressCenter-center" ><p>编辑</p></router-link>
      <div class="shippingAddressCenter-bottom" @click="handleDelete(index)" ><p>删除</p></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shippingAddressCenter",
    flag:true,
    data(){
      return{
        categoryIndex:0,
        num:-1,
        shippingAddressCenter:[
          {
            name:'张伟',
            phone:'18292007218',
            text:'浙江省杭州市西湖区文三路138号东方通信大厦7楼501室'
          },
          {
            name:'李睿',
            phone:'13772899089',
            text:'陕西省西安市未央区文景路石油小区'
          },
        ]
      }
    },
    methods:{
      handleDelete(index){
        this.shippingAddressCenter.splice(index,1)
      },
      handleChack(index){
        this.num==-1?this.num=index:this.num=-1;
      }
    },
    props:{
      ShippingAddressCenter:{
        type:Object,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
