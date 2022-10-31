import React from 'react';
import classnames from 'classnames';

import styles from './card.scss';

export default ({ color, handleClick, index, display, dimmed }) => (
  <div
    className={classnames(styles.card, { [styles.dimmed]: dimmed })}
    onClick={() => handleClick(index, color)}
  >
    <div className={styles.cardContent}>{display ? color : 'X'}</div>
  </div>
);
