import { useMemo, useState } from "react"

const App = () => {

  function expensiveCalc() {
    console.log('expensiveCalc called')
    let total = 0
    for (let i = 0; i < 1_000_000_000; i++) {
      total += i
    }
    return total
  }

  const [count, setCount] = useState(0)
  const [exp, setExp] = useState(false)
  const data = useMemo(() => expensiveCalc(), [])

  return (
    <div>
      <span>{count}</span>
      <span>{data}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setExp(!exp)}>click to call</button>
    </div>
  )
}
export default App