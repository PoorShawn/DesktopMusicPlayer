<template>
    <h2>
        RootPageLayout
    </h2>
    <div class="container main-view">
        <RouterView />
    </div>

</template>

<script setup lang="ts">
</script>

<style lang="scss">
$navbarPanelHeight: 50px;
$playerPanelHeight: 80px;
$mainContainerTopPadding: $navbarPanelHeight + 20px;
$mainContainerBottomPadding: $playerPanelHeight + 20px;

.container {
    display: block;
    max-width: 100%;
}

.main-view {
    padding: { 
        top: $mainContainerTopPadding;
        bottom: $mainContainerBottomPadding;
    };
}
</style>