import { useAppContext } from '../hooks/useAppContext'
import { UserProfile } from './UserProfile'

export function UserList() {
  const { users } = useAppContext()

  return (
    <section className="user-list">
      {users.map((user) => (
        <UserProfile key={user.id} userId={user.id} />
      ))}
    </section>
  )
}
