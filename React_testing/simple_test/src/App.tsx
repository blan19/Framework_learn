import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const onDecrease = () => {
    setCount((prev) => prev - 1);
  };
  const onDisable = () => {
    setDisable((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <h1 data-testid="counter">{count}</h1>
        <button disabled={disable} data-testid="increase" onClick={onIncrease}>
          +
        </button>
        <button disabled={disable} data-testid="decrease" onClick={onDecrease}>
          -
        </button>
        <div>
          <button
            onClick={onDisable}
            data-testid="disable"
            style={{ backgroundColor: "blue" }}
          >
            on/off
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
