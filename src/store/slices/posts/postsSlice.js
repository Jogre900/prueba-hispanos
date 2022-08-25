import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoading: false,
    posts: [],
  },
  reducers: {
    startLoadingPosts: (state) => {
      state.isLoading = true
    },
    setPosts: (state, action) => {
      state.isLoading = false
      state.posts = action.payload
    },
  },
})

export const { startLoadingPosts, setPosts } = postSlice.actions
