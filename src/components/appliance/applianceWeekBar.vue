<template>
    <div class="appliance-week-bar">
      <ul class="appliance-week-bar-list">
        <li :class="{'applianceWeekBarFocus':currentIndex == 1}" @click="handleLeft">本周最热卖</li>
        <li :class="{'applianceWeekBarFocus':currentIndex == 2}" @click="handleMiddle">本周人气TOP</li>
        <li :class="{'applianceWeekBarFocus':currentIndex == 3}" @click="handleRight">好物推荐榜</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "applianceWeekBar",
      data(){
          return{
            currentIndex :1
          }
      },
      methods:{
        handleLeft(){
          this.currentIndex =1;
          this.$emit("receiveWeek",'weekHot')
        },
        handleMiddle(){
          this.currentIndex =2;
          this.$emit("receiveWeek",'peopleTop')
        },
        handleRight(){
          this.currentIndex =3;
          this.$emit("receiveWeek",'greatRecommend')
        }
      },
      props:{
        weekHot:{
          type:Object,
          required:true
        }
      }
    }
</script>

<style scoped>

</style>
