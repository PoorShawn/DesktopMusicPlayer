<template>
  <PageLayout />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import PageLayout from '@renderer/layouts/app/PageLayout.vue'
import { syncWithElectronStore, updatePiniaStore } from '@renderer/composables/useStore'

onMounted(() => {
  updatePiniaStore()
  syncWithElectronStore()
})
</script>

<style lang="css">
body {
  margin: 0;
}
</style>
