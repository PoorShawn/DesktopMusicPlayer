<template>
  <h1>MainPage</h1>
  <button @click="toLogin">hide Tab</button>
</template>

<script setup lang="ts">
import { hideTab } from '@renderer/composables/useTabs'

const toLogin = () => {
  console.log('To Login')
  hideTab()
}
</script>
