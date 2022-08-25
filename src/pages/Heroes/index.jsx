import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../store/slices/counter'

const heroesFetcher = () => {
  return fetch('http://localhost:4000/superheroes').then((res) => res.json())
}

const onSuccess = (data) => {
  console.log('actions after success fetching', data)
}

const onError = (error) => {
  console.log('actions after success fetching', error)
}

const Heroes = () => {
  const dispatch = useDispatch()
  const counter = useSelector(({ counter }) => counter)
  const { data, isLoading, isFetching, isError, error, refetch } = useQuery(
    'heroes',
    heroesFetcher,
    {
      cacheTime: 5000, // duración de la cache
      staleTime: 30000, // tiempo donde no habrá refresco de data
      refetchOnMount: true, // refresca la data al montar el componente
      refetchOnWindowFocus: false, // refresca la data al entrar en foco
      refetchInterval: 10000, // intervalo de refresco
      refetchIntervalInBackground: true, // refresca la data en segundo plano
      enabled: false, // activa el refresco de data, false si quieres hace el refresco manual
      onSuccess, // acciones a ejecutar al recibir la data
      onError, // acciones a ejecutar al recibir un error
    }
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>
  }

  console.log(isLoading, isFetching)

  return (
    <>
      <h2>Heroes</h2>
      <button onClick={refetch}>Fetch!</button>
      {data &&
        data.map((hero) => (
          <div key={hero.id}>
            <h3>{hero.name}</h3>
          </div>
        ))}
      <span>{counter.value}</span>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Heroes
