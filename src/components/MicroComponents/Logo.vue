<template>
    <router-link class="flex-1 logo-wrapper" to="/">
        <div class="logo">
            <img src="../../assets/logo.svg" alt="aim-digital">
        </div>
    </router-link>
</template>
<script>
    export default {
        name: 'Logo'
    }
</script>
<style lang="scss">
    .logo-wrapper {
        .logo {
            img {
                max-width: 160px;
            }
        }
    }
</style>