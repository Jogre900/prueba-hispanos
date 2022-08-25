import { startLoadingPosts, setPosts } from './postsSlice'
export const getPosts = () => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPosts())
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    dispatch(setPosts(data))
  }
}
