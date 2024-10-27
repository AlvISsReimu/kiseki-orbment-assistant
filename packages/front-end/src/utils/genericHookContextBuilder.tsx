import { createContext } from 'react'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any // React.ReactNode
}

export const genericHookContextBuilder = <T, P>(hook: () => T) => {
  const Context = createContext<T>(undefined as never)

  return {
    Context,
    ContextProvider: (props: Props & P) => {
      const value = hook()

      return <Context.Provider value={value}>{props.children}</Context.Provider>
    },
  }
}
