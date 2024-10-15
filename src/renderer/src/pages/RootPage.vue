<template>
  <TheBrowsersTabs v-if="isRenderBrowserTabs" />
  <TheAuthentication v-else />

  <!-- test -->
  <button @click="toggleView">Toggle RootPage</button>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from 'vue'
import { hideTab } from "@renderer/composables/useTabs";

const TheBrowsersTabs = defineAsyncComponent(
  () => import('@renderer/layouts/baseWindow/TheBrowsersTabs.vue')
)
const TheAuthentication = defineAsyncComponent(
  () => import('@renderer/layouts/baseWindow/TheAuthentication.vue')
)

const isRenderBrowserTabs = ref(false)

//test
const toggleView = () => {
  isRenderBrowserTabs.value = !isRenderBrowserTabs.value
}
watch(isRenderBrowserTabs, (isRenderBrowserTabs) => {
  if (!isRenderBrowserTabs) {
    hideTab()
  }
})
</script>
