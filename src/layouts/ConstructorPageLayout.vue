<template>
    <div class="constructor">
        <LeftPanel/>
        <slot/>
    </div>
</template>

<script>
    import LeftPanel from "../components/MicroComponents/LeftPanel";
    export default {
        name: 'ConstructorLayout',
        components: {
            LeftPanel
        }
    }
</script>