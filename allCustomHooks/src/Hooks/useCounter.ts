import { useState } from 'react'

export function useCounter(initialValue = 0, incrementBy = 1) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((count) => count + incrementBy);
  }

  const decrement = () => {
    setCount((count) => count - incrementBy)
  }

  const reset = ()=>{
    setCount(initialValue)
  }

  return [count, increment, decrement, reset];
}
