<template>
  <PageLayout />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import PageLayout from '@renderer/layouts/app/PageLayout.vue'
import { syncWithElectronStore, updatePiniaStore } from '@renderer/composables/useElectronStore'
updatePiniaStore()
onMounted(() => {
  syncWithElectronStore()
  updatePiniaStore()
})
</script>

<style lang="css"></style>
