<template>
  <div class="panel">
    <NavbarHistoryButton direction="left" />
    <NavbarSearchButton />
    <NavbarNavigationButton />

    <NavbarHistoryButton direction="right" />
    <NavbarRefreshButton />
    <NavbarQueueButton />
  </div>
</template>

<script setup lang="ts">
import NavbarSearchButton from '@renderer/components/buttons/navbarButtons/NavbarSearchButton.vue'
import NavbarHistoryButton from '@renderer/components/buttons/navbarButtons/NavbarHistoryButton.vue'
import NavbarNavigationButton from '@renderer/components/buttons/navbarButtons/NavbarNavigationButton.vue'
import NavbarRefreshButton from '@renderer/components/buttons/navbarButtons/NavbarRefreshButton.vue'
import NavbarQueueButton from '@renderer/components/buttons/navbarButtons/NavbarQueueButton.vue'
</script>

<style scoped lang="scss">
.panel {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ada9a9;

  position: relative;
  top: 0;
  left: 0;
  right: 0;
}
</style>
