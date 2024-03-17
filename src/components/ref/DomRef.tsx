import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!) // pick the HTML element type that fulfills your requirement
  // not null assertion can be used if we are sure it will never be null

  useEffect(() => {
    inputRef.current.focus() // current? if it can be null
  }, [])

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}
