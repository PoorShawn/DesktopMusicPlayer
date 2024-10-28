<template>
  <div class="sidebar-panel">
    <BaseSidebarItem
      icon="HomeFilled"
      :link="home"
      :class="{ active: activeItem === home().name }"
      :is-active="activeItem === home().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Collection"
      :link="savedTracks"
      :class="{ active: activeItem === savedTracks().name }"
      :is-active="activeItem === savedTracks().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="List"
      :link="playlists"
      :class="{ active: activeItem === playlists().name }"
      :is-active="activeItem === playlists().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Medal"
      :link="top"
      :class="{ active: activeItem === top().name }"
      :is-active="activeItem === top().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Box"
      :link="releases"
      :class="{ active: activeItem === releases().name }"
      :is-active="activeItem === releases().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Headset"
      :link="radio"
      :class="{ active: activeItem === radio().name }"
      :is-active="activeItem === radio().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="PriceTag"
      :link="multitag"
      :class="{ active: activeItem === multitag().name }"
      :is-active="activeItem === multitag().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Help"
      :link="communities"
      :class="{ active: activeItem === communities().name }"
      :is-active="activeItem === communities().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Timer"
      :link="history"
      :class="{ active: activeItem === history().name }"
      :is-active="activeItem === history().name"
      @click="handleClick"
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
import { ref } from 'vue'

const activeItem = ref(home().name)
const handleClick = (itemText: string) => {
  activeItem.value = itemText
}
</script>

<style scoped lang="scss">
.sidebar-panel {
  /* test */
  /* border: 1px solid red; */

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
