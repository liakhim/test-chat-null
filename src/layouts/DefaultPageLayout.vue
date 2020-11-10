<template>
    <div>
        <div class="container">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DefaultLayout'
    }
</script>

<style lang="scss">
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