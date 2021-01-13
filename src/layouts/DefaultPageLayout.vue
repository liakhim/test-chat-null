<template>
    <div>
        <div class="container-fluid">
            <Sidebar @show-click="showClick"/>
            <slot/>
        </div>
    </div>
</template>

<script>
    import Sidebar from "../components/MicroComponents/Sidebar";
    export default {
        name: 'DefaultLayout',
        data() {
          return {
              show: false
          }
        },
        components: {Sidebar},
        methods: {
            showClick() {
                this.show = true
            }
        }
    }
</script>

<style lang="scss">
    .sidebar {
        position: absolute;
        top: 0;
        left: 0;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>