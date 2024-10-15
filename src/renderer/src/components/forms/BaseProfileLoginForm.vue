<template>
  <h2>BaseProfileLoginForm</h2>
  <button @click="setAnonymous">set Anonymous</button>
  <br /><br />
</template>

<script setup lang="ts">
import useProfileStore from '@renderer/store/profile'

const profileStore = useProfileStore()
const setAnonymous = () => {
  profileStore.isAnonymous = true
}
</script>

<style lang="scss"></style>
