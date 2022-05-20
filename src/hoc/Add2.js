import React, { useState } from "react";

export default function Add2() {
  const [num, setNum] = useState(4);

  return (
    <div>
      <h1>{num + num}</h1>
    </div>
  );
}
