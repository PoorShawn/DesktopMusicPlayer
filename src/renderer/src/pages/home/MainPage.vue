<template>
  <h1>MainPage</h1>
  <button @click="toLogin">To Login</button>
</template>

<script setup lang="ts">
import { hideTab } from '@renderer/composables/useTabs'
import { setAnonymous } from '@renderer/composables/useElectronStore'

const toLogin = () => {
  console.log('To Login')
  hideTab()

  setAnonymous(false)
}
</script>
