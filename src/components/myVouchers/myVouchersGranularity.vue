<template>
    <ul class="my-vouchers-granularity" v-if="showGranularity" @click="displayGranularity">
      <li>由高到低</li>
      <li>由低到高</li>
    </ul>
</template>

<script>
    export default {
        name: "myVouchersGranularity",
        data(){
          return{
            showGranularity:true
          }
        },
      methods:{
        displayGranularity(){
          this.$emit("sendGranularity")
        }
      }
    }
</script>

<style scoped>

</style>
