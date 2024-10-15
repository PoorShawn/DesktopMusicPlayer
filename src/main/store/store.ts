import Store from 'electron-store'

export const setTab = (tab: string) => {
  const store = new Store()
  store.set('tab', tab)
  console.log('set tab: ', tab)
}
