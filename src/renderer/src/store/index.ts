import layoutStore from '@renderer/store/layout'
import profileStore from '@renderer/store/profile'
import { snakeCase, camelCase } from 'change-case'

const piniaStore = {
  layout: layoutStore,
  profile: profileStore
}

export function updatePiniaStore(nameWithKey, value) {
  const [name, key] = nameWithKey.split('_')
  const store = piniaStore[name]
  if (store) {
    const formattedKey = snakeCase(key)
    const actionName = camelCase(`set-${formattedKey}`)
    const action = store()[actionName]
    if (typeof action === 'function') {
      action(value)
    }
  }
}

// export function addPiniaStore(nameWithKey, value) {
//   const [name, key] = nameWithKey.split('_')
//   const store = piniaStore[name]
//   if (store) {
//     const formattedKey = snakeCase(key)
//     //console.log('formatedKey', formattedKey)
//     const actionName = camelCase(`add-${formattedKey}`)
//     //console.log('actionName', actionName)
//     const action = store()[actionName]
//     //console.log('action', action)
//     if (typeof action === 'function') {
//       action(value)
//     }
//   }
// }
