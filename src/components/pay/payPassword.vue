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
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
      hiddenAll(){
        this.$emit("sendfalse",false)
      }
    }
  }
</script>

<style scoped>

</style>
