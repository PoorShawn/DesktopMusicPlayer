<template>
  <h2>BaseProfileLoginForm</h2>
  <button @click="handleClick">set Anonymous</button>
  <br /><br />
</template>

<script setup lang="ts">
import useProfileStore from '@renderer/store/profile'
import { setAnonymous } from '@renderer/composables/useStore'

const profileStore = useProfileStore()
const handleClick = () => {
  setAnonymous(true)
  profileStore.setIsAnonymous(true)
}
</script>

<style lang="scss"></style>
