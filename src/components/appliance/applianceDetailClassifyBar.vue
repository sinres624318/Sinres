<template>
    <div class="appliance-detail-classify-bar">
      <ul class="appliance-detail-classify-bar-list">
        <li :class="{'applianceDetailClassifyBarFocus':currentIndex == 1}" @click="handleChangeOne">电视</li>
        <li :class="{'applianceDetailClassifyBarFocus':currentIndex == 2}" @click="handleChangeTow">空调</li>
        <li :class="{'applianceDetailClassifyBarFocus':currentIndex == 3}" @click="handleChangeThree">冰箱</li>
        <li :class="{'applianceDetailClassifyBarFocus':currentIndex == 4}" @click="handleChangeFour">洗衣机</li>
        <li :class="{'applianceDetailClassifyBarFocus':currentIndex == 5}" @click="handleChangeFive">厨卫大电</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "applianceDetailClassifyBar",
        data(){
          return{
            currentIndex:1
          }
        },
      methods:{
        handleChangeOne(){
          this.currentIndex = 1;
          this.$emit("applianceClassifyHandleBar",'television')
        },
        handleChangeTow(){
          this.currentIndex = 2;
          this.$emit("applianceClassifyHandleBar",'airConditioner')
        },
        handleChangeThree(){
          this.currentIndex = 3;
          this.$emit("applianceClassifyHandleBar",'refrigerator')
        },
        handleChangeFour(){
          this.currentIndex = 4;
          this.$emit("applianceClassifyHandleBar",'washingMachine')
        },
        handleChangeFive(){
          this.currentIndex = 5;
          this.$emit("applianceClassifyHandleBar",'kitchen')
        }
      }
    }
</script>

<style scoped>

</style>
