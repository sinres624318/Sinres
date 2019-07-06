<template>
    <div class="pay-password">
      <van-popup
        position="bottom"
        v-model="modalShow">
        <van-password-input
          :value="value"
          info="密码为 6 位数字"
          @focus="showKeyboard = true"
        />
        <van-number-keyboard
          :show="showKeyboard"
          extra-key="."
          theme="custom"
          close-button-text="完成"
          @close="change"
          @input="onInput"
          @delete="onDelete"
        />
      </van-popup>
    </div>
</template>

<script>
  import {getCookie} from "./../../assets/js/common";
  import {payPassword} from "./../../api/url";
  import {
    PasswordInput,
    NumberKeyboard,
    Popup
  } from 'vant';
  export default {
    name: "payPassword",
    components: {
      'van-password-input': PasswordInput,
      'van-number-keyboard': NumberKeyboard,
      'van-popup': Popup
    },
    data() {
      return {
        oldValue:'',
        value: '',
        showKeyboard: true,
        modalShow: false,
        modifyPayPasswordFlag: true
      }
    },

    // methods: {
    //   onInput(key) {
    //     this.value = (this.value + key).slice(0, 6);
    //     if(this.value.length==6){
    //       this.axios.post(payPassword,{
    //         "token":getCookie('token'),
    //         "order_list":[
    //           "1907053726996130",
    //           "1907052673666131"
    //         ],
    //         "total":this.sendMoney,
    //         "paypassword":this.value
    //       })
    //     }
    //   },
    //   onDelete() {
    //     this.value = this.value.slice(0, this.value.length - 1);
    //   },
    //   hiddenAll(){
    //     this.$emit("sendfalse",false)
    //   }
    // },
    methods: {
      change(){
        console.log(this.value);
      },

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
  .van-password-input {
    top: 50px;
  }
  .van-password-input__security {
    height: 70px;
  }
  .van-popup {
    padding: 0 70px;
    height:600px;
  }
  /deep/ .van-key {
    height: 90px !important;
    line-height: 90px !important;
  }
  /deep/ .van-number-keyboard__sidebar {
    height: 100%!important;
  }
  /deep/ .van-key--delete,
  /deep/ .van-key--close {
    height: 180px !important;
    line-height: 180px !important;
  }
</style>
