<template>
  <!--  <div class="container">-->
  <!--    <button class="btn">Tabs</button>-->
  <!--    <div class="ticker"></div>-->
  <!--  </div>-->
  <div class="menu">
    <BaseButton>Home Page</BaseButton>
    <BaseButton>Playlist</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@renderer/components/buttons/BaseButton.vue'
import { addTab } from '@renderer/composables/useTabs'

addTab()
</script>

<style lang="scss" scoped>
.menu {
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-bottom: 1px solid #ada9a9;
}
</style>
