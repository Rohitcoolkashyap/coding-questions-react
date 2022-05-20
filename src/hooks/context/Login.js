import React, { useContext } from "react";
import { AppContext } from "./Context";

export default function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <>
      <h2>Login</h2>
      <button onClick={() => setUsername("rohit")}>set user</button>
    </>
  );
}
