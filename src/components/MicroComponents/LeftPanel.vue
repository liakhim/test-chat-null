<template>
    <div class="left-panel">
        <div class="left-panel__block">
            Your Web Page
        </div>
        <div class="left-panel__arrow">
            ->
        </div>
        <div class="left-panel__block">
            Your Metrics
        </div>
        <div class="left-panel__arrow">
            ->
        </div>
        <div class="left-panel__block">
            Your Social Networks
        </div>
        <div class="left-panel__arrow">
            ->
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .left-panel {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        top: 0;
        left: 0;
        width: 200px;
        height: 100vh;
        &__block {
            width: 100%;
            padding: 10px;
            position: relative;
        }
        &__arrow {
            background: #d9afaf;
            width: 100%;
            padding: 10px;
            position: relative;
            min-height: 10px;
        }
    }
</style>
<script>
    export default {
        name: 'LeftPanel'
    }
</script>