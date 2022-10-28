import { defineInterface, defineProvider } from '@yorjs/core'
import { useState } from 'react'

export interface Ref<T> {
  value: T
}

export const IState = defineInterface<{ useRef: <T>(value: T) => Ref<T> }>()

export const state = defineProvider().implements(IState).setup(() => ({
  useRef(initialState) {
    const [state, setState] = useState(initialState)

    return new Proxy({ value: state }, {
      get(target, key: 'value') {
        return target[key]
      },
      set(_target, _key: 'value', value) {
        setState(value)
        return true
      }
    })
  }
}))
