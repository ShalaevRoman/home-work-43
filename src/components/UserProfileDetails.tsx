import { memo } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import type { UserProfileDetailsProps } from '../types/components'

export const UserProfileDetails = memo(function UserProfileDetails({
  userId,
}: UserProfileDetailsProps) {
  const { users, theme } = useAppContext()
  const user = users.find((u) => u.id === userId)

  if (!user) {
    return null
  }

  return (
    <div className={`user-profile-details user-profile-details--${theme}`}>
      <p>Роль: {user.role}</p>
      <p>Тема успадкована через контекст: {theme}</p>
    </div>
  )
})
