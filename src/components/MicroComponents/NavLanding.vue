<template>
    <nav class="d-flex">
        <ul class="d-flex">
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
