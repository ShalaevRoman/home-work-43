import { memo } from 'react'
import { useAppSelector } from '../redux/hooks'
import type { UserProfileProps } from '../types/components'
import { UserProfileDetails } from './UserProfileDetails'

export const UserProfile = memo(function UserProfile({ userId }: UserProfileProps) {
  const theme = useAppSelector((state) => state.theme.theme)
  const user = useAppSelector((state) => state.users.users.find((u) => u.id === userId))

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
