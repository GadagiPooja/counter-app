import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(2);

  const increment = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div className="button-container">
        <button onClick={decrease}>decrease</button>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
}

export default App;
