<template>
  <h1>HomePage</h1>
  <button @click="toLogin">To Login</button>
</template>

<script setup lang="ts">
//import layout from '@renderer/store/layout'
import { updateGlobalStore } from '@renderer/composables/useStore'
import { closeAllTabs } from '@renderer/composables/useTabs'

const toLogin = () => {
  //console.log('To Login: ', layoutStore.currentTab)
  updateGlobalStore({ profile_isAnonymous: false })
  closeAllTabs()
}

// import { hideTab } from '@renderer/composables/useTabs'
// import { setAnonymous } from '@renderer/composables/useStore'
//
// const toLogin = () => {
//   hideTab()
//   setAnonymous(false)
// }
</script>
