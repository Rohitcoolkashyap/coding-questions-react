import React, { useReducer } from "react";

export default function UseReducer() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "SHOW":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <h1>count: {state.count}</h1>
      {state.showText && <p>I am visible</p>}
      <button
        style={{ marginRight: "30px" }}
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        click
      </button>
      <button onClick={() => dispatch({ type: "SHOW" })}>show</button>
    </div>
  );
}
