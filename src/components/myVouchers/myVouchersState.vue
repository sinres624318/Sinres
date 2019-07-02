<template>
    <ul class="my-vouchers-state" v-if="showState" @click="displayState">
      <li>
        全部状态
      </li>
      <li>
        待使用
      </li>
      <li>
        已使用
      </li>
      <li>
        已过期
      </li>
    </ul>
</template>

<script>
    export default {
        name: "myVouchersState",
        data(){
          return{
            showState:true
          }
        },
      methods:{
        displayState(){
          this.$emit("sendState")
        }
      }
    }
</script>

<style scoped>

</style>
