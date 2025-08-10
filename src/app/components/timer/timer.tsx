import { useState, useEffect } from 'react';

export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const getPluralForm = (seconds: number) => {
    if (seconds === 0) return '';
    if (seconds === 1) return 'у';
    if (seconds > 1 && seconds < 5) return 'ы';
    return 'аў';
  }

  useEffect(() => {
    console.log("Таймер запушчаны!");
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      console.log("Таймер спынены!");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>Ваш сайт працуе: {seconds} секунд{ getPluralForm(seconds )}</h2>
    </>
  );
};