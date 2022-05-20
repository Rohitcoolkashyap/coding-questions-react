import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);
export default function Context() {
  const [username, setUsername] = useState("user");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <h1>Context</h1>

      <Login />
      <User />
    </AppContext.Provider>
  );
}
