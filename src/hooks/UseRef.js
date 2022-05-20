import React, { useRef } from "react";

export default function UseRef() {
  const inputStyle = {
    border: "2px solid black",
    padding: "15px",
    fontSize: "20px",
    color: "black",
  };

  const inputRef = useRef(null);
  const changeText = () => {
    console.log(inputRef.current.value);
  };
  return (
    <>
      <h1>UseRef</h1>
      <input
        style={inputStyle}
        type="text"
        placeholder="Enter text..."
        ref={inputRef}
      />
      <button onClick={changeText}>Change Text</button>
    </>
  );
}
