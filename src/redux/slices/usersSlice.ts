import { createSlice } from '@reduxjs/toolkit'
import type { User } from '../../types/models'
import { INITIAL_USERS } from '../../constants/config'

interface UsersState {
  users: User[]
}

const initialState: UsersState = {
  users: INITIAL_USERS,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer