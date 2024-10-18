import useProfileStore from '@renderer/store/profile'

export const setAnonymous = (isAnonymous: boolean) => {
  window.api.setAnonymous(isAnonymous)
}

export const getElectronStore = () => {
  return window.api.getElectronStore()
}

export const syncWithElectronStore = () => {
  getElectronStore().then((res: object) => {
    const profileStore = useProfileStore()
    profileStore.setIsAnonymous(res['isAnonymous'])
  })
}

export const updatePiniaStore = () => {
  window.api.updatePiniaStore((data: object) => {
    const profileStore = useProfileStore()
    profileStore.setIsAnonymous(data['isAnonymous'])
  })
}
