<template>
  <!--  <div class="container">-->
  <!--    <button class="btn">Tabs</button>-->
  <!--    <div class="ticker"></div>-->
  <!--  </div>-->
  <div class="menu">
    <MenuButton> Home Page </MenuButton>
    <!-- <BaseButton>Playlist</BaseButton>-->
  </div>
</template>

<script setup lang="ts">
// 让每一个tab对应和管理一个页面
import MenuButton from '@renderer/components/buttons/MenuButton.vue'
import layout from '@renderer/store/layout'
import { addTab } from '@renderer/composables/useTabs'
import { generateKey } from '@renderer/utils/utils'
//import { onMounted, ref, watch } from 'vue'

const layoutStore = layout()
// const tabs = ref(layoutStore.tabs || [])

// watch(
//   () => layoutStore.tabs,
//   (newTabs) => {
//     tabs.value = newTabs
//   }
// )

// onMounted(() => {
//   if (!layoutStore.tabs || layoutStore.tabs.length === 0) {
//     const tabData = { uuid: generateKey(), path: 'home' }
//     addTab(tabData)
//     layoutStore.setCurrentTab(tabData)
//     console.log('piniaStore currentTab: ', layoutStore.currentTab)
//   }
// })

//当应用启动时，创建一个path为home的子窗口
const tabs: string[] = layoutStore.tabs

if (!tabs || tabs.length === 0) {
  const tabData = { uuid: generateKey(), path: 'home' }
  addTab(tabData)
  layoutStore.setCurrentTab(tabData)
  console.log('piniaStore currentTab: ', layoutStore.currentTab)
  //console.log('piniaStore tabs: ', layoutStore.tabs)
}

// import { addTab, setActiveTab } from '@renderer/composables/useTabs'
// import { getElectronStoreTabs } from '@renderer/composables/useStore'
// import layout from '@renderer/store/layout'
// import { getTabs } from '../../../../main/store/store'
// import { onBeforeMount, reactive, ref } from 'vue'
//
// const layoutStore = layout()
//
// const tabList = ref([])
//
// getElectronStoreTabs().then((tabs: string[]) => {
//   tabList.value = tabs
//
//   if (tabs.length === 0) {
//     // create a new tab, and set it as active
//     addTab('home')
//   }
//   // load the every stored tab and select one as active
//
//   console.log('tabs: ', tabs)
//   console.log('pinia_tabs: ', layoutStore.tabs)
// })
// console.log('__pinia_tabs: ', layoutStore.tabs)
//
// // console.log('pinia_tabs', layout().tabs)
// //
// // addTab('home')
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
