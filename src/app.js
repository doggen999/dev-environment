import React from "react";
import faker from "faker";
import styles from "./app.scss";

import Component from "./components/Component";

export default () => (
  <div className={styles.app}>
    <Component heading={faker.company.catchPhrase()} />
  </div>
);
