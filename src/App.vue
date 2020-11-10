<template>
  <div id="app">
    <div class="container">
      <header class="flex-row-center-between">
        <Logo/>
        <NavLanding/>
      </header>
      <component :is="layout">
        <router-view/>
      </component>
    </div>
  </div>
</template>
<script>
  import Logo from "./components/MicroComponents/Logo";
  import NavLanding from "./components/MicroComponents/NavLanding";
  export default {
    components: {Logo,NavLanding},
    computed: {
      layout() {
        return this.$route.meta.layout || 'default-layout'
      }
    }
  }
</script>
<style lang="scss">
  @import "styles/normalize";
  @import "styles/global";
</style>