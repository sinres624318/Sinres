<template>
    <div class="appliance-header">
      <i class="iconfont appliance-header-icon-left"  @click="backClickHandle">&#xe61c;</i>
      <h3>京东家电</h3>
      <div class="appliance-header-icon-right">
        <i class="iconfont" @click="handleMore">&#xe670;</i>
      </div>
    </div>
</template>

<script>
    export default {
        name: "applianceHeader",
      methods: {
        backClickHandle() {
          this.$router.go(-1);
        },
        handleMore(){
          this.show = !this.show
          this.$emit("sendMore",this.show)
          console.log(this.show)
        }
      },
      data(){
          return{
            show:false
          }
      }
    }
</script>

<style scoped>

</style>
