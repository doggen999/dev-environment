import React, { useEffect, useState } from "react";

export const Component = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date(), 1000);
    });
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};
