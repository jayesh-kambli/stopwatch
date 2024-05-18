import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);
  const [min, setMin] = useState("");

  function handleWatch() {
    setTimer((prev) => !prev);
  }

  function handleReset() {
    setTime(0);
    setTimer(false);
  }

  useEffect(() => {
    let watch;
    if (timer) {
        watch = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    
    return () => {clearInterval(watch)};
  }, [timer]);

  useEffect(() => {
    
    let m = Math.floor(time/60);
    let s = Math.round(time%60);

    // let makeTimeM = (m.toString().length < 2 ? "0"+m : m )
    let makeTimeS = (s.toString().length < 2 ? "0"+s : s )

    setMin("Time: "+m+":"+makeTimeS)

  }, [time])

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>StopWatch</h1>
      <h4>{min}</h4>
      <div>
        <button onClick={handleWatch}>{timer ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
