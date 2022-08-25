import { forwardRef, useRef, useEffect } from 'react'

const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return <input ref={resolvedRef} type="checkbox" {...rest} />
})

export default Checkbox
