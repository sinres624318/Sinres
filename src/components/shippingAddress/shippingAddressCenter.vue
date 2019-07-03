<template>
  <div class="shippingAddressCenter-fist">
    <div  class="shippingAddressCenter" v-for="(item,index) in  shippingAddressCenter" :key="index">
      <div class="shippingAddressCenter-top">
        <div class="shippingAddressCenter-top-top">
          <span></span>
        </div>
        <div class="shippingAddressCenter-top-bottom">
          <h3>{{ item.name}}，<span>{{ item.phone}}</span></h3>
          <p>{{ item.text}}</p>
        </div>
      </div>
      <div class="shippingAddressCenter-center">编辑</div>
      <div class="shippingAddressCenter-bottom" @click="handleDelete(index)" >删除</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shippingAddressCenter",
      flag:true,
    data(){
          return{
            shippingAddressCenter:[
              {
                name:'张三',
                phone:'18292007218',
                text:'浙江省杭州市西湖区文三路138号东方通信大厦7楼501室'
              },
              {
                name:'张三',
                phone:'18292007218',
                text:'浙江省杭州市西湖区文三路138号东方通信大厦7楼501室'
              },
              {
                name:'张三',
                phone:'18292007218',
                text:'浙江省杭州市西湖区文三路138号东方通信大厦7楼501室'
              }
            ]
          }
    },
      methods:{
        handleDelete(index){
          this.shippingAddressCenter.splice(index,1)
        }
      }
    }
</script>

<style scoped>

</style>
