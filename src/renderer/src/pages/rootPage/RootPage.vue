<template>
  <TheBrowsersTabs v-if="isRenderBrowserTabs" />
  <TheAuthentication v-else />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import useProfileStore from '@renderer/store/profile'

const TheBrowsersTabs = defineAsyncComponent(
  () => import('@renderer/layouts/rootWindow/TheBrowserTabs.vue')
)
const TheAuthentication = defineAsyncComponent(
  () => import('@renderer/layouts/rootWindow/TheAuthentication.vue')
)

const profileStore = useProfileStore()
const isRenderBrowserTabs = computed(() => {
  return profileStore.isAnonymous || profileStore.id
})
</script>
