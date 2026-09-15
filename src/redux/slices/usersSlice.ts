import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { User } from '../../types/models'
import { fetchUsers as fetchUsersFromApi } from '../../api/usersApi'

type UsersStatus = 'idle' | 'loading' | 'succeeded' | 'failed'

interface UsersState {
  users: User[]
  status: UsersStatus
  error: string | null
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => fetchUsersFromApi())

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Не вдалося завантажити користувачів'
      })
  },
})

export default usersSlice.reducer