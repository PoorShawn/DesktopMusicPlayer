import { defineStore } from 'pinia'

const data = {
  state() {
    return {
      activeTab: null
    }
  },
  actions: {
    setActiveTab(value) {
      this.activeTab = value
    }
  }
}

export default defineStore('layout', data)
