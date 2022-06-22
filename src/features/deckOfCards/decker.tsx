import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  init, selectDeck, selectDraw, selectShow
} from './deckSlice';
import styles from './decker.module.css';
import { ranksMap, suitsMap, content } from './utils/contant';
import Buttons from './buttons';

export function Decker() {
  const deckItems = useAppSelector(selectDeck);
  const drawItems = useAppSelector(selectDraw);
  const showDeckCards = useAppSelector(selectShow);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(init());
  }, [dispatch]);

  const display = (displayItems: any, showCard: any) => displayItems.map((items: any, key: any) => {
    let cardClass = styles.cards;
    if( items.suit === "hearts" || items.suit === "diamonds") {
      cardClass = `${cardClass} ${styles.red}`
    }
    return (
      <div className={styles.card} key={key} data-testid={`cards-${showCard}`}>
        <div className={showCard ? styles.show : styles.hide}>
          <div className={cardClass} data-value={`${ranksMap[items.rank]}${suitsMap[items.suit]}`}>
            {suitsMap[items.suit]}
          </div>

        </div>
        <div className={showCard ? styles.hide : styles.show}>
          {key+1}
        </div>
      </div>
    )
  })

  return (
    <div>
      <Buttons />
      <div className={styles.deck} data-testid="deck">
        <h1 title="Deck">{content.deckTitle}</h1>
        <div className={styles.displayCard}>
          {display(deckItems, showDeckCards)}
        </div>
      </div>
      
      <div data-testid="withdrawn">
        <h1 title="Withdrawn">{content.drawn}</h1>
        <div className={styles.displayCard}>
          {display(drawItems, true)}
        </div>
      </div>
      
    </div>
  );
}
