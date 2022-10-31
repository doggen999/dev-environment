import React, { useState, useEffect } from 'react';

import { randomizeArray } from '@utils/utils';
import { COLORS, TEXT_STRINGS } from 'Consts/constants';

import Card from '../card/card';

import styles from './gameBoard.scss';

let randomizedColorArray = randomizeArray();

export default () => {
  const [displayCards, setDisplayCards] = useState([]);
  const [freeze, setFreeze] = useState(false);
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [points, setPoints] = useState(0);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  const resetGame = () => {
    setPoints(0);
    setDisplayCards([]);
    randomizedColorArray = randomizeArray();
  };

  const freezeAndUnfreeze = () => {
    setFreeze(true);

    setTimeout(() => {
      setNumberOfClicks(0);
      setFirstCard({});
      setSecondCard({});
      setFreeze(false);
    }, 2000);
  };

  const evaluateSelectedCards = (firstCardColor, secondCardColor) => {
    if (firstCardColor === secondCardColor) {
      setPoints((points) => points + 1);

      setDisplayCards((displayCards) => [
        ...displayCards,
        firstCard.index,
        secondCard.index,
      ]);
    } else {
      setPoints((points) => points - 1);
    }

    freezeAndUnfreeze();
  };

  const handleClick = (index, color) => {
    if (freeze || displayCards.includes(index)) {
      return;
    }

    if (numberOfClicks % 2 === 0) {
      setFirstCard({ index, color });
    } else {
      setSecondCard({ index, color });
    }

    setNumberOfClicks((numberOfClicks) => numberOfClicks + 1);
  };

  useEffect(() => {
    if (numberOfClicks === 0) {
      return;
    }

    evaluateSelectedCards(firstCard.color, secondCard.color);
  }, [secondCard]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.boardHeader}>
        <div>Points: {points}</div>
        <div>{`${freeze ? TEXT_STRINGS.FREEZE : ''}`}</div>
        <div>
          <button onClick={resetGame}>{`${
            displayCards.length === randomizedColorArray.length
              ? TEXT_STRINGS.NEW_GAME
              : TEXT_STRINGS.RESET_GAME
          }`}</button>
        </div>
      </div>
      <div className={styles.board}>
        {randomizedColorArray.map((val, i) => {
          return (
            <Card
              data-testid={`card-${i}`}
              handleClick={handleClick}
              key={val}
              index={i}
              display={
                i === firstCard.index ||
                i === secondCard.index ||
                displayCards.includes(i)
              }
              dimmed={displayCards.includes(i)}
              color={COLORS[val % 8]}
              colorIndex={val % 8}
            />
          );
        })}
      </div>
    </div>
  );
};
