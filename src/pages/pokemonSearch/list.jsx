import { useEffect } from 'react'
import { useAtom } from 'jotai'
import PokemonInput from './PokemonInput'
import Container from '../../components/container'
import { filterTest, pokemons } from '../../store/atom'

const url = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

export default function PokemonList() {
  const [pokemon, setPokemon] = useAtom(pokemons)
  const [text] = useAtom(filterTest)

  console.log('pokemon')
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(({ results }) => setPokemon(results))
  }, [])

  return (
    <>
      <Container>
        <PokemonInput />
        {text}
        {pokemon.map(({ name, url }) => (
          <li key={name + url}>
            <span>{name}</span>
          </li>
        ))}
      </Container>
    </>
  )
}
