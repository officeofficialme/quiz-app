import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
};

export default Counter;
