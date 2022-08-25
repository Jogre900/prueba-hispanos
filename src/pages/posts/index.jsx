import { useEffect } from 'react'
import { getPosts } from '../../store/slices/posts'
import { useSelector, useDispatch } from 'react-redux'

const Posts = () => {
  const dispatch = useDispatch()
  const { isLoading, posts } = useSelector((state) => state.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  if (isLoading) return <h2>Cargando...</h2>

  return (
    <>
      <h1>Lists of Posts</h1>
      {posts &&
        posts.map((p) => (
          <article key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </article>
        ))}
    </>
  )
}

export default Posts
