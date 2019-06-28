<template>
  <div class="shippingAddressFooter">
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
    />
  </div>
</template>

<script>
import { AddressList } from 'vant';
    export default {
        name: "shippingAddressFooter",
      components:{
        'van-address-list':AddressList,
      },
        data() {
          return {
            chosenAddressId: '1',
            list: [
              {
                id: '1',
                name: '张三',
                tel: '13000000000',
                address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
              },
              {
                id: '2',
                name: '李四',
                tel: '1310000000',
                address: '浙江省杭州市拱墅区莫干山路 50 号'
              }
            ],
          }
        },

        methods: {
          onAdd() {
            Toast('新增地址');
          },

          onEdit(item, index) {
            Toast('编辑地址:' + index);
          }
        }
    }
</script>

<style scoped>

</style>
