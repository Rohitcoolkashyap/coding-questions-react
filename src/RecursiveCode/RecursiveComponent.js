import React, { Children } from "react";

export default function RecursiveComponent({ data }) {
  console.log("run");
  return (
    <div style={{ paddingLeft: "20px" }}>
      {data.map((parent) => {
        return (
          <div key={parent.name}>
            <h1>{parent.name}</h1>
            <div>
              {parent.children && <RecursiveComponent data={parent.children} />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
