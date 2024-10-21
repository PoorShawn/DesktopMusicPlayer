import { defineStore } from 'pinia'

// 定义 state 的类型
interface LayoutState {
  tabs: Array<{ uuid: string; path: string }> | null
  currentTabId: string | null
  activeTabId: string | null
}

const data = {
  // 使用泛型参数指定 state 的类型
  state: (): LayoutState => ({
    tabs: null,
    currentTabId: null,
    activeTabId: null
  }),
  actions: {
    // addTabs(value) {
    //   // 检查 value 是否不是 undefined 或 null
    //   if (value !== undefined && value !== null) {
    //     this.tabs.push(value)
    //   }
    // },
    setTabs(value: Array<{ uuid: string; path: string }>) {
      this.tabs = value
    },
    setCurrentTabId(value: string) {
      this.currentTabId = value
    },
    setActiveTabId(value: string) {
      this.activeTabId = value
    }
  }
}

export default defineStore('layout', data)
