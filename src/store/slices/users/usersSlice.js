import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  isLoading: false
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    loadingUsers: (state) => {
      state.isLoading = true
    },
    setUsers: (state, action) => {
      state.users = action.payload
      state.isLoading = false
    }
  }
})

export const { setUsers, loadingUsers } = userSlice.actions
