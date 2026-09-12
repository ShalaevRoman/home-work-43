import { createContext, useMemo, useState, type FC, type ReactNode } from 'react'
import type { AppContextValue, Theme } from '../types/models'
import { INITIAL_USERS } from '../constants/config'

const defaultContextValue: AppContextValue = {
  users: INITIAL_USERS,
  theme: 'light',
  toggleTheme: () => {},
}

export const AppContext = createContext<AppContextValue>(defaultContextValue)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const value = useMemo<AppContextValue>(
    () => ({ users: INITIAL_USERS, theme, toggleTheme }),
    [theme],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
