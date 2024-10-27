<template>
  <SidebarPanel />
  <NavBarPanel />
  <div class="main-content">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import SidebarPanel from '@renderer/layouts/panels/SidebarPanel.vue'
import NavBarPanel from '@renderer/layouts/panels/NavbarPanel.vue'
</script>

<style scoped lang="scss">
.main-content {
  position: relative;
  top: 100px;
  left: 200px;
}
</style>
