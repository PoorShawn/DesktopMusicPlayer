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
import { addTab, addTabObserver, setActiveTab } from '@renderer/composables/useTabs'
import { generateKey } from '@renderer/utils/utils'
import { computed, onMounted, watch } from 'vue'
// import { setViewsStore } from '@renderer/composables/useStore'

const layoutStore = layout()
const tabs = computed(() => layoutStore.tabs)

// 初始或者tabs为空时，新建tab
watch(
  () => layoutStore.tabs,
  (newTabs) => {
    if (!newTabs || newTabs.length === 0) {
      const tabData = { uuid: generateKey(), path: 'home' }
      addTab(tabData)
      setActiveTab(tabData.uuid)
    }
  },
  { immediate: true }
)

onMounted(() => {
  // 监听 'add-tab-observer' 频道，更新pinia中的tabs数据
  addTabObserver((data: string) => {
    const dataFormatted: { uuid: string; path: string } = JSON.parse(data)
    if (layoutStore.tabs === null) {
      layoutStore.setTabs([dataFormatted])
    } else {
      const isTabPresent = layoutStore.tabs.find((tab) => tab.uuid === dataFormatted.uuid)
      if (!isTabPresent) {
        const tabs = [...layoutStore.tabs, dataFormatted]
        layoutStore.setTabs(tabs)
      }
    }
  })

  // // xueyao
  // closeTabObserver((tabId: string) => {
  //   const newTabs = layoutStore.tabs.filter((tab) => tab.uuid !== tabId)
  //   setViewsStore({'layout_tabs': newTabs})
  // })

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
