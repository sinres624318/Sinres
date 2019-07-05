<template>
  <div class="newAddress-fist">
    <NavBar>
      <template v-slot:left>
        <div class="left iconfont" @click="backClickHandle">&#xe61c;</div>
      </template>
      <template v-slot:title>
        <div class="title">编辑地址</div>
      </template>
      <template v-slot:right>
        <div class="right iconfont" ></div>
      </template>
    </NavBar>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
  import areaList from './../../assets/js/area'
  import {goBack} from './../../assets/js/common'
  import NavBar from '../../components/common/navBar'
  import { AddressEdit } from 'vant';
  export default {
    name: "editAddress",
    components:{
      NavBar,
      'van-address-edit':AddressEdit,
      areaList
    },
    data() {
      return {
        areaList,
        searchResult: [],
      }
    },

    methods: {
      backClickHandle() {
        goBack(this.$router)
      },
      onSave() {
        Toast('save');
      },
      onDelete() {
        Toast('delete');
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
          }];
        } else {
          this.searchResult = [];
        }
      }
    }
  }
</script>
<style src="../../../static/css/newAddress.css"></style>
<style scoped>

</style>
