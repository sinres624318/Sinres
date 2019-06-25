<template>
  <div class="nav-bar">
    <slot name="left"></slot>
    <slot name="title"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
  export default {
    name: "navBar"
  }
</script>

<style scoped>
</style>
