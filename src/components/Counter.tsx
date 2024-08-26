import React from "react";
import "./Counter.scss";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>добавить</button>
      <button onClick={decrement}>отнять</button>
    </div>
  );
};
