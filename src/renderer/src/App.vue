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

const isStoredDataLoaded = ref(false)

onMounted(() => {
  // 监听 'update-global-store-observer' 频道，更新pinia中的数据
  updateGlobalStoreObserver()

  // 监听 'set-views-store-observer' 频道，更新pinia中的数据
  setViewsStoreObserver()

  // 获取存储在electron-store中的数据
  getElectronStore().then(() => {
    isStoredDataLoaded.value = true
  })
})
</script>

<style lang="css">
body {
  margin: 0;
}
</style>
