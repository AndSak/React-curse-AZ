import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  let increment = () => {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>plus +1</button>
      <button onClick={decrement}>minus-1</button>
    </div>
  )
}

export default Counter;
