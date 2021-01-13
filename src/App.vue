<template>
  <div id="app" ref="app">
    <div class="container-fluid">
      <header class="header d-flex">
          <Logo/>
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
  .header {
    justify-content: flex-end;
  }
</style>