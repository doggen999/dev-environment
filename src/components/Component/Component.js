import React, { useEffect, useState } from "react";
import styles from "./Component.scss";

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
    <div className={styles.foo}>
      <div className={`${styles.bar}`}>
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
    </div>
  );
};
