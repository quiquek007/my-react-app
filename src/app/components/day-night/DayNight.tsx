import React, { useEffect } from 'react';

interface DayNightProps {
  dayMessage: string;
  nightMessage: string;
}

export const DayNight: React.FC<DayNightProps> = ({ dayMessage, nightMessage }) => {
  const [isDay, setIsDay] = React.useState(true);
  
  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  return <span>{isDay ? dayMessage : nightMessage}</span>;
}
