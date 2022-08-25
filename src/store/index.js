import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { postSlice } from './slices/posts'
import { userSlice } from './slices/users'

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    post: postSlice.reducer,
    user: userSlice.reducer
  }
})

export default store
