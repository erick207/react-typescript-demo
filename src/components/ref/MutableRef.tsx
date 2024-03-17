import { useState, useRef, useEffect } from 'react'

export const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef<number | null>(null)

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current) // alternatively, instead of null checking we can set useRef with 'undefined' instead
  }
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  )
}
