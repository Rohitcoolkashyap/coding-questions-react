import React, { useState } from "react";

export default function Add(props) {
 const {num} = props
  return (
    <div>
      <h1>{num + num}</h1>
    </div>
  );
}

