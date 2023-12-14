import { useState } from "react";

const Counter = ({count, onIncrement}) => {

  const decrement = () => onIncrement((prevCount) => prevCount - 1);
  const increment = () => onIncrement((prevCount) => prevCount + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
