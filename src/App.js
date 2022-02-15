import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter'

function App() {
  const [value, setValue] = useState('word');

  return (
    <div>
      <Counter/>
      <ClassCounter/>

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
