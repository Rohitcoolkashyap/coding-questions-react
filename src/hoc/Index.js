import React from "react";
import Add from "./Add";
import Wrapper from "./Hoc";

function Calculator(props) {
  return (
    <div>
      <Add />
    </div>
  );
}

export default Wrapper(Calculator);
