<template>
  <div class="sidebar-panel">
    <BaseSidebarItem
      icon="HomeFilled"
      :link="home"
    />
    <BaseSidebarItem
      icon="Collection"
      :link="savedTracks"
    />
    <BaseSidebarItem
      icon="List"
      :link="playlists"
    />
    <BaseSidebarItem
      icon="Medal"
      :link="top"
    />
    <BaseSidebarItem
      icon="Box"
      :link="releases"
    />
    <BaseSidebarItem
      icon="Headset"
      :link="radio"
    />
    <BaseSidebarItem
      icon="PriceTag"
      :link="multitag"
    />
    <BaseSidebarItem
      icon="Help"
      :link="communities"
    />
    <BaseSidebarItem
      icon="Timer"
      :link="history"
    />
  </div>
</template>

<script setup lang="ts">
import BaseSidebarItem from '@renderer/components/baseItems/BaseSidebarItem.vue'
import {
  home,
  savedTracks,
  playlists,
  top,
  releases,
  radio,
  multitag,
  communities,
  history
} from '@renderer/utils/tabPath'
</script>

<style scoped lang="scss">
.sidebar-panel {
  position: fixed;
  z-index: 1;
  background-color: #f6f4f4;
  width: 40px;
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-x: hidden;
  font-size: 12px;
  font-weight: 500;

  transition: width 0.3s ease;
}

.sidebar-panel:hover {
  width: 200px;
}
</style>
