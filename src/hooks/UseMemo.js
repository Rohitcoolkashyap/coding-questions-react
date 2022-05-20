import React, { useCallback, useMemo, useState } from "react";

export default function UseMemo() {
  const [show, setShow] = useState(false);

  const getVal = useMemo(() => {
    cal();
  }, [show]);

  const getFunc = useCallback(
    (name) => {
      return name + " kashyap";
    },
    [show]
  );

  function cal() {
    for (let i = 0; i < Array(10000).length; i++) {
      console.log(i);
    }
    return "finish";
  }
  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>
        <h2>click</h2>
      </button>

      <h1>{getVal}</h1>
    </>
  );
}
