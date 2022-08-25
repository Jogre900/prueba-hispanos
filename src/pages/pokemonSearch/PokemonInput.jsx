import { useAtom } from 'jotai'
import { filterTest } from '../../store/atom'
function PokemonInput() {
  const [text, setText] = useAtom(filterTest)
  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
}

export default PokemonInput
