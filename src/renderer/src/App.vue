<template>
  <!--  获取electron-store后，才开始渲染页面-->
  <PageLayout v-if="isStoredDataLoaded" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageLayout from '@renderer/layouts/app/PageLayout.vue'
import {
  getElectronStore,
  updateGlobalStoreObserver,
  setViewsStoreObserver
} from '@renderer/composables/useStore'
import { updatePiniaStore } from '@renderer/store'

const isStoredDataLoaded = ref(false)

// 替换pinia中的数据存储
const setStoreData = (data: object) => {
  const storeKeysValues: [string, unknown][] = Object.entries(data)
  storeKeysValues.forEach(([key, value]) => {
    updatePiniaStore(key, value)
  })
}

// // 新增pinia中的数据存储
// const addStoreData = (data: object) => {
//   const storeKeysValues: [string, unknown][] = Object.entries(data)
//   storeKeysValues.forEach(([key, value]) => {
//     addPiniaStore(key, value)
//   })
// }

onMounted(() => {
  // 监听 'update-global-store-observer' 频道，更新pinia中的数据
  updateGlobalStoreObserver((data: string) => {
    const dataFormatted = JSON.parse(data)
    console.log('updateGlobalStoreObserver: ', dataFormatted)
    setStoreData(dataFormatted)
  })

  // 监听 'set-views-store-observer' 频道，更新pinia中的数据
  setViewsStoreObserver((data: object) => {
    setStoreData(data)
  })

  // // 监听 'add-views-store-observer' 频道，新增pinia中的数据
  // addViewsStoreObserver((data: object) => {
  //   // const data: object = JSON.parse(value)
  //   addStoreData(data)
  // })

  // 获取存储在electron-store中的数据
  getElectronStore((value: string) => {
    const data: object = JSON.parse(value)
    setStoreData(data)

    // 当数据加载完成，设置为true
    isStoredDataLoaded.value = true
  })
})
</script>

<style lang="css">
body {
  margin: 0;
}
</style>
