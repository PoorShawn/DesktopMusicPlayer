<template>
  <div class="container" :class="{ active: isActive}">
    <button :class="{ active: isActive }" @click="activateTab">
      <slot></slot>
    </button>
    <CrossIcon :class="{ active: isActive }" @click="deleteTab"></CrossIcon>
  </div>
</template>

<script setup lang="ts">
import CrossIcon from '@renderer/components/icons/CrossIcon.vue'
import { computed, watch } from 'vue'
import layout from '@renderer/store/layout'
import { closeTab, setActiveTab } from '@renderer/composables/useTabs'

// const emit = defineEmits(['click'])
const props = defineProps(['tabId'])
const layoutStore = layout()

watch(
  () => layoutStore.activeTabId,
  () => {
    //console.log('layoutStore.activeTabId: ', layoutStore.activeTabId)
    //console.log('layoutStore.currentTabId: ', layoutStore.currentTabId)
    //console.log('isActive: ', isActive.value)
  }
)
const isActive = computed(() => {
  return layoutStore.activeTabId === props.tabId
})

const activateTab = () => {
  console.log('activateTab_clicked')
  setActiveTab(props.tabId)
}

const deleteTab = () => {
  console.log('deleteTab_clicked')
  closeTab(props.tabId)
}

</script>

<style scoped lang="scss">
.container {
  margin: 5px;
  padding: 5px;
  border: 1px solid rgb(107, 101, 101);
  background-color: #ffffff;
  border-radius: 28px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

.container.active {
  margin: 5px;
  padding: 5px;
  border: none;
  background-color: #4048b4;
  border-radius: 28px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  background-color: #ffffff;
  border: none;
  color: rgb(125, 125, 129);
  cursor: pointer;
}

button.active {
  background-color: #4048b4;
  border: none;
  color: aliceblue;
  cursor: pointer;
}
//.container {
//  margin: 5px;
//  padding: 8px;
//  /* border: 2px solid black; */
//  background-color: #7579c8;
//  border-radius: 28px;
//  cursor: pointer;
//
//  display: flex;
//  justify-content: center;
//  align-items: center;
//}
//
//button {
//  background-color: #7579c8;
//  border: none;
//  color: #7f7c7c;
//  cursor: pointer;
//}
//
//.active {
//  background-color: #4048b4;
//  color: aliceblue;
//}
</style>
