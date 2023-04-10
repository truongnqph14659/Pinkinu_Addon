import React, { useState, useEffect } from 'react';
import style from './buynow.module.scss';
import { useTranslation } from 'react-i18next';
interface props {
  deadline: string;
  checkTime: (isValid: boolean) => void;
}

const Timer = ({ deadline, checkTime }: props) => {
  const { t } = useTranslation();
  const [days, setDays] = useState<number | string>('00');
  const [hours, setHours] = useState<number | string>('00');
  const [minutes, setMinutes] = useState<number | string>('00');
  const [seconds, setSeconds] = useState<number | string>('00');

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
        checkTime(false);
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
        <p className="text-sm ">{t('timer.days')}</p>
      </div>
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{hours}</p>
        <p className="text-sm ">{t('timer.hours')}</p>
      </div>
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{minutes}</p>
        <p className="text-sm ">{t('timer.minutes')}</p>
      </div>
      <div
        className={`${style.boxTimer} flex flex-col items-center justify-center`}
      >
        <p className="text-3xl">{seconds}</p>
        <p className="text-sm ">{t('timer.seconds')}</p>
      </div>
    </div>
  );
};

export default Timer;
