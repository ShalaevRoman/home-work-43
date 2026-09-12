export interface User {
  id: string
  name: string
  email: string
  role: string
}

export type Theme = 'light' | 'dark'

export interface AppContextValue {
  users: User[]
  theme: Theme
  toggleTheme: () => void
}
