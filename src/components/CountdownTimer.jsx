import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [milliseconds, setMilliseconds] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        const totalMilliseconds =
          (hours === "" ? 0 : parseInt(hours)) * 3600000 +
          (minutes === "" ? 0 : parseInt(minutes)) * 60000 +
          (seconds === "" ? 0 : parseInt(seconds)) * 1000 +
          (milliseconds === "" ? 0 : parseInt(milliseconds));

        if (totalMilliseconds <= 0) {
          clearInterval(interval); 
        } else {
          const newTotalMilliseconds = totalMilliseconds - 10;
          const newHours = Math.floor(newTotalMilliseconds / 3600000);
          const newMinutes = Math.floor((newTotalMilliseconds % 3600000) / 60000);
          const newSeconds = Math.floor((newTotalMilliseconds % 60000) / 1000);
          const newMilliseconds = newTotalMilliseconds % 1000;

          setHours(newHours === 0 ? "" : newHours);
          setMinutes(newMinutes === 0 ? "" : newMinutes);
          setSeconds(newSeconds === 0 ? "" : newSeconds);
          setMilliseconds(newMilliseconds === 0 ? "" : newMilliseconds);
        }
      }, 10); 
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, hours, minutes, seconds, milliseconds]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setHours("");
    setMinutes("");
    setSeconds("");
    setMilliseconds("");
    setIsActive(false);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[750px] border-[2px] border-[#D0A7D2] p-5">
        <div className="flex items-center justify-around p-6 gap-2">
          <div className="border">
            <input
              className="text-center text-5xl text-[#242323] w-[100%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="00"
              value={hours}
              onChange={(e) => {
                setHours(e.target.value);
              }}
            />
            <p className="text-center">Hours</p>
          </div>
          <div className="border">
            <input
              className="text-center text-5xl text-[#242323] w-[100%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="00"
              value={minutes}
              onChange={(e) => {
                setMinutes(e.target.value);
              }}
            />
            <p className="text-center">Minutes</p>
          </div>
          <div className="border">
            <input
              className="text-center text-5xl text-[#242323] w-[100%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="00"
              value={seconds}
              onChange={(e) => {
                setSeconds(e.target.value);
              }}
            />
            <p className="text-center">Seconds</p>
          </div>
          <div className="border">
            <input
              className="text-center text-5xl text-[#242323] w-[100%] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              placeholder="00"
              value={milliseconds}
              onChange={(e) => {
                setMilliseconds(e.target.value);
              }}
            />
            <p className="text-center">Milliseconds</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 py-3">
          <button
            className="bg-green-600 text-white py-1 px-5 rounded-md border"
            onClick={startTimer}
          >
            Start
          </button>
          <button
            className="bg-red-600 text-white py-1 px-5 rounded-md border"
            onClick={stopTimer}
          >
            Stop
          </button>
          <button
            className="bg-[#4374D3] text-white py-1 px-5 rounded-md border"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
