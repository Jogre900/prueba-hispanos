import { setUsers, loadingUsers } from './usersSlice'

export const getUsers = () => {
  return async (dispatch, getState) => {
    dispatch(loadingUsers())
    const res = await fetch('public/test_data/users.json')
    const data = await res.json()
    dispatch(setUsers(data))
  }
}
