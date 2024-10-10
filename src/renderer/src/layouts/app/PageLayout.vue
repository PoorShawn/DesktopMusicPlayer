<template>
    <!-- choose different PageLayout based on currentRouteName -->
    <RootPageLayout v-if="currentRouteName === 'RootPage'" />
    <DefaultPageLayout v-else />

</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

const RootPageLayout = defineAsyncComponent(() => import('./pageLayout/RootPageLayout.vue'));
const DefaultPageLayout = defineAsyncComponent(() => import('./pageLayout/DefaultPageLayout.vue'));

const route = useRoute();
const currentRouteName = computed(() => route.name)

</script>

<style lang="scss"></style>