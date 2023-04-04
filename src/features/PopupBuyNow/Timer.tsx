import React, { useState, useEffect } from 'react';

interface props {
  deadline: string;
}

const Timer = ({ deadline }: props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = deadline => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full items-center justify-evenly gap-3 text-lg font-bold">
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl">{days}</p>
        <p>Days</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl">{hours}</p>
        <p>Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl">{minutes}</p>
        <p>Minutes</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-3xl">{seconds}</p>
        <p>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
