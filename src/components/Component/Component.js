import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "./Component.module.scss";

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
    <div className={styles.component}>
      <div>
        <h1 className={`${styles.heading}`}>{props.heading}</h1>
        <div className={styles.content}>{time.toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

Component.propTypes = {
  heading: PropTypes.string.isRequired,
};
