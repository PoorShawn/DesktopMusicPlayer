<template>
  <SidebarPanel />
  <NavBarPanel />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import SidebarPanel from '@renderer/layouts/panels/SidebarPanel.vue'
import NavBarPanel from '@renderer/layouts/panels/NavbarPanel.vue'
</script>

<style lang="scss"></style>
