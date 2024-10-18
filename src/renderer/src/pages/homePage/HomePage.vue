<template>
  <h1>HomePage</h1>
  <button @click="toLogin">To Login</button>
</template>

<script setup lang="ts">
import { hideTab } from '@renderer/composables/useTabs'
import { setAnonymous } from '@renderer/composables/useStore'

const toLogin = () => {
  hideTab()
  setAnonymous(false)
}
</script>
