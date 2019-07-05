<template>
    <div class="pay-password">
      <van-password-input
        :value="value"
        :length="6"
        :gutter="15"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
</template>

<script>
  import { PasswordInput, NumberKeyboard } from 'vant';
  import {getCookie} from "./../../assets/js/common";
  import {payPassword} from "./../../api/url";

  export default {
    name: "payPassword",
    components:{
      "van-password-input":PasswordInput,
      "van-number-keyboard":NumberKeyboard
    },
    data() {
      return {
        value: '',
        showKeyboard: true
      };
    },

    methods: {
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
        if(this.value.length==6){
          this.axios.post(payPassword,{
            "token":getCookie('token'),
            "order_list":[
              "1907053726996130",
              "1907052673666131"
            ],
            "total":this.sendMoney,
            "paypassword":this.value
          })
        }
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
      hiddenAll(){
        this.$emit("sendfalse",false)
      }
    },
    props:{
      sendMoney:{
        type:Number,
        required:true
      }
    }
  }
</script>

<style scoped>

</style>
