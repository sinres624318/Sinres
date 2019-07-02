<template>
  <div class="mine-user-info">
    <div class="user-info">
      <div class="avatar-wrap">
        <div class="avatar">
          <img src="../../../static/img/mine/user_photo.jpg" alt="">
        </div>
      </div>
      <div class="personal-wrap">
        <div class="name-wrap">
          <span class="name">小明</span>
          <span class="mine-user-info-name-edit"></span>
          <div class="vip v5"></div>
        </div>
        <div class="pin">用户名：jd-85cas568465as</div>
      </div>
    </div>
    <div class="hor-tips">
      <div class="real-name"></div>
      <div class="notice">京享值84325</div>
      <div class="notice goto-arrow">小白信用100.6</div>
    </div>
    <router-link
      tag="div"
      :to="{name:'AccountManagement'}"
      class="account-wrap">
      <div class="account-wrap-content">
        账号管理
      </div>
    </router-link>
    <div class="plus-black-wrap">
      <div class="inner">
        <div class="title">
          <div class="plus-title">尊享11大特权</div>
          <div class="plus-subtitle">立即查看</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "mineUserInfo"
    }
</script>

<style scoped>

</style>
