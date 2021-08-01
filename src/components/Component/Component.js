import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Component.scss";

export const Component = (props) => {
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
        <h1>{props.heading}</h1>
        <div>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

Component.propTypes = {
  heading: PropTypes.string.isRequired,
};
