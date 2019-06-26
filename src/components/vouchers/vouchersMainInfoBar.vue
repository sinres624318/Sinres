<template>
    <div class="vouchers-main-info-bar">
      <div class="vouchers-main-info-bar-log"></div>
      <ul class="vouchers-main-info-bar-list">
        <li v-for="(item,index) in vouchersMainTime">
          <i>{{item}}</i>
          <span>即将开始</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "vouchersMainInfoBar",
        data(){
          return{
            vouchersMainTime:["06:00","10:00","14:00","18:00","22:00"]
          }
        }
    }
</script>

<style scoped>

</style>
