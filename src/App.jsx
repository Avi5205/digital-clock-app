import { useEffect, useState } from "react";
import "./App.css";

function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timerId);
  }, []);

  return time;
}

function App() {
  const time = useCurrentTime();

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(time);

  return (
    <div className="clock-container">
      <div className="clock">{formattedTime}</div>
    </div>
  );
}

export default App;
