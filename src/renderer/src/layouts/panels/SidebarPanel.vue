<template>
  <div class="container">
    <BaseSidebarItem
      icon="HomeFilled"
      :text="home().name"
      :class="{ active: activeItem === home().name }"
      :is-active="activeItem === home().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Collection"
      :text="savedTracks().name"
      :class="{ active: activeItem === savedTracks().name }"
      :is-active="activeItem === savedTracks().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="List"
      :text="playlists().name"
      :class="{ active: activeItem === playlists().name }"
      :is-active="activeItem === playlists().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Medal"
      :text="top().name"
      :class="{ active: activeItem === top().name }"
      :is-active="activeItem === top().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Box"
      :text="releases().name"
      :class="{ active: activeItem === releases().name }"
      :is-active="activeItem === releases().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Headset"
      :text="radio().name"
      :class="{ active: activeItem === radio().name }"
      :is-active="activeItem === radio().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="PriceTag"
      :text="multitag().name"
      :class="{ active: activeItem === multitag().name }"
      :is-active="activeItem === multitag().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Help"
      :text="communities().name"
      :class="{ active: activeItem === communities().name }"
      :is-active="activeItem === communities().name"
      @click="handleClick"
    />
    <BaseSidebarItem
      icon="Timer"
      :text="history().name"
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

const activeItem = ref('')
const handleClick = (itemText: string) => {
  activeItem.value = itemText
}
</script>

<style scoped lang="scss">
.container {
  /* test */
  /* border: 1px solid red; */

  position: fixed;
  z-index: 1;
  background-color: #f6f4f4;
  width: 200px;
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
}
</style>
