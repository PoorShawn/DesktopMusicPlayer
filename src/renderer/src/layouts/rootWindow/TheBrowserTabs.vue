<template>
  <div class="menu">
    <MenuButton> Home Page </MenuButton>

    <!--    test-->
    <button @click="getPinia">Get Pinia</button>
  </div>
</template>

<script setup lang="ts">
// 让每一个tab对应和管理一个页面
import MenuButton from '@renderer/components/buttons/MenuButton.vue'
import layout from '@renderer/store/layout'
import { addTab, addTabObserver, setActiveTab } from '@renderer/composables/useTabs'
import { generateKey } from '@renderer/utils/utils'
import { onMounted, watch } from 'vue'

const layoutStore = layout()
//const tabs = layoutStore.tabs

watch(
  () => layoutStore.tabs,
  (newTabs) => {
    if (!newTabs || newTabs.length === 0) {
      const tabData = { uuid: generateKey(), path: 'home' }
      addTab(tabData)
      setActiveTab(tabData.uuid)
      //console.log('newTab_watch')
      //layoutStore.setCurrentTab(tabData)
      // console.log('layoutStore.tabs: ', layoutStore.tabs)
      // console.log('layoutStore.currentTabId: ', layoutStore.currentTabId)
      // console.log('layoutStore.activeTabId: ', layoutStore.activeTabId)
    }
  },
  { immediate: true }
)

onMounted(() => {
  // 监听 'add-tab-observer' 频道，更新pinia中的tabs数据
  addTabObserver((data: string) => {
    const dataFormatted: { uuid: string; path: string } = JSON.parse(data)
    //console.log('addTabObserver: ', data)
    //console.log('layoutStore.tabs::: ', layoutStore.tabs)
    if (layoutStore.tabs === null) {
      // const tabs = [...layoutStore.tabs, data]
      //console.log('null: ', [dataFormatted])
      layoutStore.setTabs([dataFormatted])
    } else {
      const isTabPresent = layoutStore.tabs.find((tab) => tab.uuid === dataFormatted.uuid)
      if (!isTabPresent) {
        const tabs = [...layoutStore.tabs, dataFormatted]
        //console.log('add not present: ', tabs)
        layoutStore.setTabs(tabs)
      }
    }
  })

  if (layoutStore.tabs && layoutStore.tabs.length !== 0) {
    //console.log('newTab_onMounted')
    for (const tab of layoutStore.tabs) {
      addTab(tab)
      // setActiveTab(tab.uuid)
    }
  }
})

// test
const getPinia = () => {
  console.log('layoutStore.tabs: ', layoutStore.tabs)
  console.log('layoutStore.currentTabId: ', layoutStore.currentTabId)
  console.log('layoutStore.activeTabId: ', layoutStore.activeTabId)
}

// //当应用启动时，创建一个path为home的子窗口
// const tabs: string[] = layoutStore.tabs
//
// if (!tabs || tabs.length === 0) {
//   const tabData = { uuid: generateKey(), path: 'home' }
//   addTab(tabData)
//   layoutStore.setCurrentTab(tabData)
//   console.log('piniaStore currentTab: ', layoutStore.currentTab)
//   //console.log('piniaStore tabs: ', layoutStore.tabs)
// }
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
