import { memo } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import type { UserProfileProps } from '../types/components'
import { UserProfileDetails } from './UserProfileDetails'

export const UserProfile = memo(function UserProfile({ userId }: UserProfileProps) {
  const { users, theme } = useAppContext()
  const user = users.find((u) => u.id === userId)

  if (!user) {
    return null
  }

  return (
    <article className={`user-profile user-profile--${theme}`}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <UserProfileDetails userId={userId} />
    </article>
  )
})
