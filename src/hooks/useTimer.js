import { useEffect, useState } from "react";

// This is the Hooks for the timer
function useTimer({ duration = 60, onTimeUp }) {
  // State variables
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // This function is used to start the timer
  const startTimer = () => {
    if (!isRunning) setIsRunning(true);
  };

  // this function is used to reset the timer
  const resetTimerState = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setTimeLeft(duration);
  };

  // This use effect is run every time the time and the isRunning state changes
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    if (timeLeft === 0) {
      setIsRunning(false);
      setIsCompleted(true);
      onTimeUp();
      return;
    }

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, isRunning]);

  return { timeLeft, isCompleted, startTimer, resetTimerState };
}

export default useTimer;
