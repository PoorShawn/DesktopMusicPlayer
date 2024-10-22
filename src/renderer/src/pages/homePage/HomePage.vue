<template>
  <h1>HomePage</h1>
  <button @click="toLogin">To Login</button>

  <!--  test-->
  <button @click="test">Test</button>
</template>

<script setup lang="ts">
//import layout from '@renderer/store/layout'
import { updateGlobalStore } from '@renderer/composables/useStore'
import { showMainWindow } from '@renderer/composables/useTabs'
import layout from '@renderer/store/layout'

const toLogin = () => {
  //console.log('To Login: ', layoutStore.currentTab)
  updateGlobalStore({ profile_isAnonymous: false })
  //closeAllTabs()
  showMainWindow()
}

const test = () => {
  console.log('layout_currentTabId: ', layout().currentTabId)
}

// import { hideTab } from '@renderer/composables/useTabs'
// import { setAnonymous } from '@renderer/composables/useStore'
//
// const toLogin = () => {
//   hideTab()
//   setAnonymous(false)
// }
</script>
