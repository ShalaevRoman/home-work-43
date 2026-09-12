import { useAppContext } from '../hooks/useAppContext'
import { UserList } from './UserList'

export function Dashboard() {
  const { theme, toggleTheme } = useAppContext()

  return (
    <div className={`dashboard dashboard--${theme}`}>
      <header className="dashboard__header">
        <h1>Список користувачів</h1>
        <button type="button" onClick={toggleTheme}>
          Перемкнути тему ({theme === 'light' ? 'світла' : 'темна'})
        </button>
      </header>
      <UserList />
    </div>
  )
}
