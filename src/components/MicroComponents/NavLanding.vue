<template>
    <nav class="flex-3 flex-row-center-end">
        <ul class="flex-row-center-end">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/login">Sign in</router-link>
            </li>
            <li>
                <router-link to="/constructor">Constructor</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
    export default {
        name: 'NavLanding',
        props:['links']
    }
</script>
<style lang="scss">
    nav {
        ul {
            li {
                margin: 0 1em;
                a {
                    font-size: 1.2em;
                }
            }
        }
    }
</style>
