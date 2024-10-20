<template>
  <PageLayout v-if="isStoredDataLoaded" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PageLayout from '@renderer/layouts/app/PageLayout.vue'
import {
  addViewsStoreObserver,
  getElectronStore,
  updateGlobalStoreObserver
} from '@renderer/composables/useStore'
import { addPiniaStore, updatePiniaStore } from '@renderer/store'

const isStoredDataLoaded = ref(false)

const setStoreData = (data) => {
  //console.log('data: ', data)
  const storeKeysValues = Object.entries(data)
  //console.log('storeKeysValues: ', storeKeysValues)
  storeKeysValues.forEach(([key, value]) => {
    //console.log('key: ', key)
    //console.log('value: ', value)
    updatePiniaStore(key, value)
  })
}

const addStoreData = (data) => {
  //console.log('data: ', data)
  const storeKeysValues = Object.entries(data)
  //console.log('storeKeysValues: ', storeKeysValues)
  storeKeysValues.forEach(([key, value]) => {
    //console.log('key: ', key)
    //console.log('value: ', value)
    addPiniaStore(key, value)
  })
}

onMounted(() => {
  updateGlobalStoreObserver((data) => {
    //console.log('updateGlobalStoreObserver: ', data)
    setStoreData(data)
  })

  addViewsStoreObserver((data) => {
    //console.log('addViewsStoreObserver', data)
    //const data = JSON.parse(value)
    addStoreData(data)
  })

  getElectronStore((value) => {
    //console.log('getElectronStore: ', value)
    const data = JSON.parse(value)
    //console.log('getElectronStore: ', data)
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
