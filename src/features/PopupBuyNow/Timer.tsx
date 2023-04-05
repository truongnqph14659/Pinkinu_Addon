import React, { useState, useEffect } from 'react';
import style from './buynow.module.scss';

interface props {
  deadline: string;
}

const Timer = ({ deadline }: props) => {
  const [days, setDays] = useState<number | string>(0);
  const [hours, setHours] = useState<number | string>(0);
  const [minutes, setMinutes] = useState<number | string>(0);
  const [seconds, setSeconds] = useState<number | string>(0);

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();
    return time;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getTime(deadline);

      if (time < 0) {
        setDays('00');
        setHours('00');
        setMinutes('00');
        setSeconds('00');
        clearInterval(interval);
      } else {
        setDays(
          Math.floor(time / (1000 * 60 * 60 * 24)) < 10
            ? `0${Math.floor(time / (1000 * 60 * 60 * 24))}`
            : Math.floor(time / (1000 * 60 * 60 * 24))
        );

        setHours(
          Math.floor((time / (1000 * 60 * 60)) % 24) < 10
            ? `0${Math.floor((time / (1000 * 60 * 60)) % 24)}`
            : Math.floor((time / (1000 * 60 * 60)) % 24)
        );

        setMinutes(
          Math.floor((time / 1000 / 60) % 60) < 10
            ? `0${Math.floor((time / 1000 / 60) % 60)}`
            : Math.floor((time / 1000 / 60) % 60)
        );

        setSeconds(
          Math.floor((time / 1000) % 60) < 10
            ? `0${Math.floor((time / 1000) % 60)}`
            : Math.floor((time / 1000) % 60)
        );
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-evenly gap-3 text-lg font-bold">
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{days}</p>
        <p className="text-sm ">Days</p>
      </div>
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{hours}</p>
        <p className="text-sm ">Hours</p>
      </div>
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{minutes}</p>
        <p className="text-sm ">Min</p>
      </div>
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{seconds}</p>
        <p className="text-sm ">Sec</p>
      </div>
    </div>
  );
};

export default Timer;
