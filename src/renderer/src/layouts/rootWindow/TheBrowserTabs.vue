<template>
  <div class="menu">
    <MenuButton v-for="tab in tabs" :key="tab.uuid" :tabId="tab.uuid">
      {{ tab.path }}
    </MenuButton>
    <AddIcon></AddIcon>
    <!--    test-->
    <button @click="getPinia">Get Pinia</button>
  </div>
</template>

<script setup lang="ts">
// 让每一个tab对应和管理一个页面
import MenuButton from '@renderer/components/buttons/MenuButton.vue'
import AddIcon from '@renderer/components/icons/AddIcon.vue'
import layout from '@renderer/store/layout'
import { addTab, addTabObserver, closeTabObserver, setActiveTab } from '@renderer/composables/useTabs'
import { generateKey } from '@renderer/utils/utils'
import { computed, onMounted, watch } from 'vue'

const layoutStore = layout()
const tabs = computed(() => layoutStore.tabs)
const activeTab = computed(() => layoutStore.activeTabId)
const tabsCount = computed(() => {
  return layoutStore.tabs ? layoutStore.tabs.length : 0;
})

function addNewTab() {
  const tabData = { uuid: generateKey(), path: 'home' }
  addTab(tabData)
  setActiveTab(tabData.uuid)
}

watch(
  tabsCount,(value) => {
    if (!value) {
      addNewTab()
    }
  }
)


onMounted(() => {
  // const tabs = layoutStore.tabs
  // const activeTab = layoutStore.activeTabId

  // 监听 'add-tab-observer' 频道，更新pinia中的tabs数据
  addTabObserver()

  // 监听 'close-tab-observer' 频道，更新pinia中的tabs数据
  closeTabObserver().then((tabId) => {
    if (tabId === activeTab.value) {
      const tabIndex = tabs.value.findIndex(tab => tab.uuid === tab.uuid)
      const newTabIndex = tabIndex ? (tabIndex -1) : 1
      setActiveTab(tabs[newTabIndex])
    }
  })

  // 如果tabs列表为空，则新增tab并渲染
  if (tabsCount.value === 0) {
    addNewTab()
  } else {
    // 如果tabs列表不为空，则按照tabs列表新增tab并渲染
    tabs.value.forEach(tab => addTab(tab))
    if (activeTab.value) {
      setActiveTab(activeTab.value)
    }
  }
})

// test
const getPinia = () => {
  console.log('layoutStore.tabs: ', layoutStore.tabs)
  console.log('layoutStore.currentTabId: ', layoutStore.currentTabId)
  console.log('layoutStore.activeTabId: ', layoutStore.activeTabId)
}

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
