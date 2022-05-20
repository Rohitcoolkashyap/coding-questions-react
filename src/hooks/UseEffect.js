import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log("use effect");
  }, [show]);
  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setShow(!show)}>Show</button>
    </>
  );
}
