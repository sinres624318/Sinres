<template>
  <div id="app">
    <router-view></router-view>
    <ToolsBar v-if="$route.meta.flag"></ToolsBar>
  </div>

</template>
<script>
import ToolsBar from './components/common/toolsBar'
  export default {
    name: 'App',
    components: {ToolsBar},
    data() {
      return {}
    }
  }


</script>

<style>
  #app {
    height: 100%;
    overflow: hidden;
  }
</style>
