import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [disable, setDisable] = useState(false);

  const onClickPlus = () => setCounter((prev) => prev + 1);
  const onClickMinu = () => setCounter((prev) => prev - 1);
  const onClickDisable = () => setDisable((prev) => !prev);
  return (
    <div>
      <div className="counter">
        <h1 data-testid="counter">{counter}</h1>
      </div>
      <div className="button-box">
        <button
          data-testid="plus-button"
          onClick={onClickPlus}
          disabled={disable}
        >
          +
        </button>
        <button
          data-testid="minus-button"
          onClick={onClickMinu}
          disabled={disable}
        >
          -
        </button>
        <button
          style={{ backgroundColor: "gray" }}
          onClick={onClickDisable}
          data-testid="disable-button"
        >
          on/off
        </button>
      </div>
    </div>
  );
};

export default App;
