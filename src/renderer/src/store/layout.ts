import { defineStore } from 'pinia'

const data = {
  state() {
    return {
      tabs: [],
      activeTab: null,
      currentTab: null
    }
  },
  actions: {
    addTabs(value) {
      // 检查 value 是否不是 undefined 或 null
      if (value !== undefined && value !== null) {
        this.tabs.push(value)
      }
    },
    setActiveTab(value) {
      this.activeTab = value
    },
    setCurrentTab(value) {
      this.currentTab = value
    }
  }
}

export default defineStore('layout', data)
