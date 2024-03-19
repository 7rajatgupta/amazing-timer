import { useState, useEffect } from "react";

const startTime = Date.now();
export default function useGetTimer() {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setTime(Date.now() - startTime);
    }, 1000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return time;
}
