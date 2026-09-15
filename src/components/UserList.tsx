import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { fetchUsers } from '../redux/slices/usersSlice'
import { UserProfile } from './UserProfile'

export function UserList() {
  const dispatch = useAppDispatch()
  const users = useAppSelector((state) => state.users.users)
  const status = useAppSelector((state) => state.users.status)
  const error = useAppSelector((state) => state.users.error)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <p className="user-list__status">Завантаження користувачів...</p>
  }

  if (status === 'failed') {
    return <p className="user-list__status user-list__status--error">{error}</p>
  }

  return (
    <section className="user-list">
      {users.map((user) => (
        <UserProfile key={user.id} userId={user.id} />
      ))}
    </section>
  )
}
