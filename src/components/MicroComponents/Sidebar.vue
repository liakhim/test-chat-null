<template>
    <div class="sidebar">
        <button class="burger open-burger" @click.prevent="showClick()">
            <span class="open-line"></span>
            <span class="open-line"></span>
            <span class="open-line"></span>
        </button>
        <sidebar-menu-drawer v-model="show">
            <ul>
                <li><a href="#"><i class="fa fa-home fa-fw"></i>Home</a></li>
                <li>
                    <router-link to="/constructor">
                        Constructor
                    </router-link>
                </li>
                <li><a href="#"><i class="fa fa-info fa-fw"></i> About</a></li>
                <li><a href="#"><i class="fa fa-envelope fa-fw"></i> Contact</a></li>
                <li><a href="#"><i class="fa fa-lock fa-fw"></i> Privacy</a></li>
                <li class="divider"></li>
                <li><a href="#"><i class="fa fa-tags fa-fw"></i> Product</a></li>
                <li><a href="#"><i class="fa fa-file-text fa-fw"></i> Blog</a></li>
                <li><a href="#"><i class="fa fa-envelope fa-fw"></i> Support</a></li>
            </ul>
            <div class="closing">
                <button class="burger close-burger" @click.prevent="show = false">
                    <span class="close-line"></span>
                    <span class="close-line"></span>
                </button>
            </div>
        </sidebar-menu-drawer>
    </div>
</template>
<style lang="scss">
    $primary: #4FD7F5;
    $secondary: rgba(#000, .6);
    $hover-bg: rgba(#000, .1);
    .burger {
        width: 36px;
        height: 24px;
        background: transparent;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        margin: 20px;
        position: relative;
        .open-line {
            width: 100%;
            height: 3px;
            background: #000;
            display: flex;
            border-radius: 2px;
            :nth-child(1) {

            }
            :nth-child(2) {

            }
            :nth-child(3) {

            }
        }
        .close-line {
            width: 100%;
            height: 3px;
            background: #000;
            display: flex;
            border-radius: 2px;
            position: absolute;
            top: 50%;
            left: 0;
            &:nth-child(1) {
                transform: rotate(45deg);
            }
            &:nth-child(2) {
                transform: rotate(-45deg);
            }
        }
    }
    .closing {
        position: absolute;
        top: 0;
        right: 0;
    }
    .open-burger {

    }
    .close-burger {

    }
    .sidebar-shown {
        background-color: rgba(#000, .36);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        overflow-y: auto;
        z-index: 9999999;
    }
    .sidebar-menu-drawer {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .sidebar-menu-drawer__body {
        transition: all .3s ease;
        position: relative;
        background-color: #fff;
        width: 337px;
        min-height: 100%;

    .sidebar-menu-drawer__header {
    h2 {
        margin: 0;
        padding: 36px 45px 61px 45px;
        color: $primary;
    }
    }
    }
    .slide-fade-enter-active, .slide-fade-leave-active {
        left: 0;
    }
    .slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
        left: -337px;
    }

    .sidebar-menu-drawer__menu {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;

            li {
                padding: 0 45px;

                &.divider {
                    padding: 0;
                    width: 100%;
                    height: 1.5px;
                    margin: 12.5px 0;
                    background-color: #f2f2f2;
                }
            }

            li a {
                text-decoration: none;
                font-weight: 600;
                color: $secondary;
                padding: 12.5px 0;
                display: block;
                transition: all .3s ease;

                &:hover, &:active {
                    color: $primary;
                }
            }
        }
    }
</style>
<script>
    import SidebarMenuDrawer from '@satmaxt/sidebar-menu-drawer'
    export default {
        name:'Sidebar',
        data() {
            return {
                show: false
            }
        },
        components: {
            SidebarMenuDrawer
        },
        methods: {
            showClick() {
                this.show = true
            }
        }
    }
</script>