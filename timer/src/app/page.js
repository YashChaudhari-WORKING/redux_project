"use client";
import { useState } from "react";

export default function Home() {
  const [time, setTimer] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });
  const [sec, setSec] = useState(0);
  const handlechange = (e) => {
    const { value, name } = e.target;
    const newTime = { ...time, [name]: Number(value) };
    setTimer(newTime);

    const totalSec = newTime.hour * 3600 + newTime.min * 60 + newTime.sec;
    setSec(totalSec);
  };
  const handleTimer = () => {
    const timerId = setInterval(() => {
      setTimer((prev) => {
        let { hour, min, sec } = prev;

        if (hour === 0 && min === 0 && sec === 0) {
          clearInterval(timerId);
          return prev; // Do nothing if already zero
        }

        if (sec > 0) {
          sec -= 1;
        } else {
          sec = 59;
          if (min > 0) {
            min -= 1;
          } else {
            min = 59;
            if (hour > 0) {
              hour -= 1;
            }
          }
        }

        return { hour, min, sec };
      });
    }, 1000);
  };
  console.log(sec);

  return (
    <div>
      <h1> TImer</h1>
      <div className="flex gap-5">
        {Object.entries(time).map((filed, index) => {
          return (
            <div key={index} className="flex justify-center items-center ">
              <label htmlFor="">{filed[0]}</label>
              <input
                type="Number"
                name={filed[0]}
                value={filed[1]}
                onChange={(e) => handlechange(e)}
                className="border p-1 "
              />
            </div>
          );
        })}
      </div>
      <h2 className="text-2xl">
        {" "}
        {time.hour}, {time.min}, {time.sec}
      </h2>
      <button onClick={() => handleTimer()} className="p-1 bg-gray-200">
        Start
      </button>
    </div>
  );
}
