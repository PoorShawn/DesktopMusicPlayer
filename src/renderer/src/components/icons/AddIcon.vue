<template>
  <div class="addTicker" @click="handleClick"></div>
</template>

<script setup lang="ts">
import { addTab, setActiveTab } from '@renderer/composables/useTabs'
import { generateKey } from '@renderer/utils/utils'

const handleClick = () => {
  console.log('add click')

  const tabData = { uuid: generateKey(), path: 'home' }
  addTab(tabData)
  setActiveTab(tabData.uuid)
}
</script>

<style scoped lang="scss">
.addTicker {
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.addTicker::before,
.addTicker::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 2px;
  background-color: rgb(127, 124, 124);
  cursor: pointer;
}

.addTicker::before {
  transform: translate(-50%, -50%) rotate(0);
}

.addTicker::after {
  transform: translate(-50%, -50%) rotate(90deg);
}
</style>
