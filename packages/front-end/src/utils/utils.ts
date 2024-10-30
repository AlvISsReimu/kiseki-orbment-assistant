import i18next from 'i18next'
import { useCallback, useState } from 'react'

const constructSingletonLocalStorage = <T>(
  namespace: string,
  key: string,
  initialValue: T,
) => {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      // Get from local storage by key
      const storageNamespace = window.localStorage.getItem(namespace)
      // Parse stored json or if none return initialValue
      return JSON.parse(storageNamespace!)[key] ?? initialValue
    } catch {
      // If error also return initialValue
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((prevV: T) => T)) =>
      new Promise<T>(res =>
        setStoredValue(p => {
          const valueToStore = value instanceof Function ? value(p) : value
          const storageNamespace = JSON.parse(
            window.localStorage.getItem(namespace) ?? '{}',
          )
          storageNamespace[key] = valueToStore
          window.localStorage.setItem(
            namespace,
            JSON.stringify(storageNamespace),
          )
          res(valueToStore)
          return valueToStore
        }),
      ),
    [],
  )

  // if new state is equal to the old one (aka `p => p`)
  // react shallow compare does not trigger rerender of the component
  const getValue = useCallback(() => setValue(p => p), [])

  return [storedValue, setValue, getValue, setStoredValue] as [
    typeof storedValue,
    typeof setValue,
    typeof getValue,
    typeof setStoredValue,
  ]
}

export const useSingletonLocalStorage = <T>(key: string, initialValue: T) => {
  const NAMESPACE_KEY = 'KISEKI_ORBMENT'
  const [storedValue, setValue, getValue] = constructSingletonLocalStorage(
    NAMESPACE_KEY,
    key,
    initialValue,
  )
  return [storedValue, setValue, getValue] as [
    typeof storedValue,
    typeof setValue,
    typeof getValue,
  ]
}

export const _loadCoreHeaders = () => {
  return [
    i18next.t('line_type_weapon'),
    i18next.t('line_type_shield'),
    i18next.t('line_type_drive'),
    i18next.t('line_type_extra'),
  ]
}
