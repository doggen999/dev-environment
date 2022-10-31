import React from 'react';
import styles from './app.scss';

import GameBoard from './components/gameBoard/GameBoard';

export default () => (
  <div className={styles.wrapper}>
    <GameBoard />
  </div>
);
