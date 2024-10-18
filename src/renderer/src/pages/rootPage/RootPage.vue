<template>
  <TheBrowsersTabs v-if="isRenderBrowserTabs" />
  <TheAuthentication v-else />
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, watch } from 'vue'
import useProfileStore from '@renderer/store/profile'
import { hideTab } from '@renderer/composables/useTabs'

const TheBrowsersTabs = defineAsyncComponent(
  () => import('@renderer/layouts/baseWindow/TheBrowsersTabs.vue')
)
const TheAuthentication = defineAsyncComponent(
  () => import('@renderer/layouts/baseWindow/TheAuthentication.vue')
)

const profileStore = useProfileStore()
const isRenderBrowserTabs = computed(() => {
  return profileStore.isAnonymous || profileStore.id
})

watch(isRenderBrowserTabs, (isRenderBrowserTabs) => {
  if (!isRenderBrowserTabs) {
    hideTab()
  }
})
</script>
