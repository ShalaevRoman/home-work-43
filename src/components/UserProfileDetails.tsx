import { memo } from 'react'
import { useAppSelector } from '../redux/hooks'
import type { UserProfileDetailsProps } from '../types/components'

export const UserProfileDetails = memo(function UserProfileDetails({
  userId,
}: UserProfileDetailsProps) {
  const theme = useAppSelector((state) => state.theme.theme)
  const user = useAppSelector((state) => state.users.users.find((u) => u.id === userId))

  if (!user) {
    return null
  }

  return (
    <div className={`user-profile-details user-profile-details--${theme}`}>
      <p>Роль: {user.role}</p>
      <p>Тема отримана з Redux-стору: {theme}</p>
    </div>
  )
})
