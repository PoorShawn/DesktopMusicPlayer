<template>
    <TheBrowsersTabs v-if="isRenderBrowserTabs"/>
    <TheAuthentication v-else/>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
const TheBrowsersTabs = defineAsyncComponent(() => import('@renderer/layouts/baseWindow/TheBrowsersTabs.vue'));
const TheAuthentication = defineAsyncComponent(() => import('@renderer/layouts/baseWindow/TheAuthentication.vue'));

const isRenderBrowserTabs: Boolean = false;
</script>