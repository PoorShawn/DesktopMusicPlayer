<template>
  <!-- choose different PageLayout based on currentRouteName -->
  <RootPageLayout v-if="currentRouteName === 'RootPage'" />
  <DefaultPageLayout v-else />

  <!-- test -->
  <!--  <router-link to="/">/</router-link>-->
  <!--  <br />-->
  <!--  <router-link to="/home">/home</router-link>-->
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

const RootPageLayout = defineAsyncComponent(() => import('./pageLayout/RootPageLayout.vue'))
const DefaultPageLayout = defineAsyncComponent(() => import('./pageLayout/DefaultPageLayout.vue'))

const route = useRoute()
const currentRouteName = computed(() => route.name)

//updatePiniaStore()


// test
// console.log('path: ', route.fullPath)
</script>

<style lang="scss"></style>
