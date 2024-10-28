<template>
  <div class="panel">
    <div class="left-part">
      <NavbarHistoryButton direction="left" />
      <NavbarSearchButton />
      <NavbarNavigationButton />
    </div>

    <div class="right-part">
      <NavbarHistoryButton direction="right" />
      <NavbarRefreshButton />
      <NavbarQueueButton />
    </div>
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ada9a9;

  position: fixed;
  top: 0;
  left: 40px;
  right: 0;
}

.left-part,
.right-part {
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 8px 10px;
}
</style>
