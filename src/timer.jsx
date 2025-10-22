import React from 'react';

export default function Timer() {
  let timerRef = React.useRef(null);
  const [counter, setCounter] = React.useState(0);

  const startHandler = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);
  };

  const stopHandler = () => {
    setCounter(0);
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const pauseHandler = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <p>Timer</p>
      <p>{counter}</p>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={pauseHandler}>Pause</button>
        <button onClick={startHandler}>Resume</button>
        <button onClick={stopHandler}>Reset</button>
      </div>
    </>
  );
}
