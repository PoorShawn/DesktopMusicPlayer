import useProfileStore from '@renderer/store/profile'
import { getElectronStore } from '@renderer/composables/useElectronStore'

export const setAnonymous = (isAnonymous: boolean) => {
  if (isAnonymous) {
    window.api.setAnonymous(isAnonymous)
    console.log('setAnonymous-preload')
  }
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
