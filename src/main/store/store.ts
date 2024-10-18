import Store from 'electron-store'

const store = new Store()

export const setTab = (tab: string) => {
  store.set('tab', tab)
  console.log('set-tab: ', tab)
}

export const setAnonymous = (isAnonymous: boolean) => {
  store.set('isAnonymous', isAnonymous)
}

export const getElectronStore = () => {
  // console.log('getElectronStore:::', { ...store.store })
  return { ...store.store }
}
