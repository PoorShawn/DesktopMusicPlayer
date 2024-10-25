<template>
  <div class="textRoute">{{ textRoute }}</div>
</template>

<script setup lang="ts">
import { tabPath } from '@renderer/utils/tabPath'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const currentRouteName = computed(() => route.path)
const textRoute = tabPath.find((tabData) => tabData.path === currentRouteName.value.slice(1))?.name
</script>

<style scoped lang="scss">
.textRoute {
  font-weight: 600;
  color: #524e4e;
}
</style>
