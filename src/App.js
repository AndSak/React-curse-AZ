import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(40);
  const [value, setValue] = useState('word');

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>plus +1</button>
      <button onClick={decrement}>minus -1</button>

      <h2>{value}</h2>
      <input
        type="input name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
