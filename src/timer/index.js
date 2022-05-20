import React, { useEffect, useRef, useState } from "react";
import "./index.css";
export default function Timer() {
  const [count, setCount] = useState(0);
  const [showTime, setShowTime] = useState(false);
  const tick = useRef(null);

  useEffect(() => {
    if (showTime) {
      tick.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 900);
    } else {
      clearInterval(tick.current);
      setCount(0);
    }
    return () => clearInterval(tick.current);
  }, [showTime]);

  const handleStop = () => {
    setShowTime(false);
  };

  console.log(tick);
  return (
    <div className="timer">
      <div>
        <div className="time">{count}</div>
        <div className="btn-group">
          <button className="mr-20px " onClick={() => setShowTime(true)}>
            start
          </button>
          <button onClick={handleStop}>stop</button>
        </div>
      </div>
    </div>
  );
}
