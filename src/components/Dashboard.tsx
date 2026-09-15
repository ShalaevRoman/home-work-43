import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { toggleTheme } from '../redux/slices/themeSlice'
import { UserList } from './UserList'

export function Dashboard() {
  const theme = useAppSelector((state) => state.theme.theme)
  const dispatch = useAppDispatch()

  return (
    <div className={`dashboard dashboard--${theme}`}>
      <header className="dashboard__header">
        <h1>Список користувачів</h1>
        <button type="button" onClick={() => dispatch(toggleTheme())}>
          Перемкнути тему ({theme === 'light' ? 'світла' : 'темна'})
        </button>
      </header>
      <UserList />
    </div>
  )
}
