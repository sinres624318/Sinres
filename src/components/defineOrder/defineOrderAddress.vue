<template>
    <div class="define-order-address">
      <ul class="define-order-userName">
        <li>
          小明
          {{sendAddress.tel}}
        </li>
        <li>{{sendAddress.address}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "defineOrderAddress",
        data(){
          return{

          }
        },
      props:{
        sendAddress:{
          type:Object,
          required:true
        }
      },
      mounted() {
      }
    }
</script>

<style scoped>

</style>
