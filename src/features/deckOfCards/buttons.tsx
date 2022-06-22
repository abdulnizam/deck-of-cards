import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { content } from './utils/contant';
import {
    reset, shuffle, draw, sortCards, selectDeck, selectDraw, showDeck, selectShow
  } from './deckSlice';
import styles from './decker.module.css';

export default function Buttons() {
    const deckItems = useAppSelector(selectDeck);
    const drawItems = useAppSelector(selectDraw);
    const showDeckCards = useAppSelector(selectShow);
    const dispatch = useAppDispatch();
    return (
        <div className={styles.row} data-testid="buttons">
            <button
                className={styles.button}
                data-testid="draw-a-card"
                onClick={() => dispatch(draw({deck: deckItems, currentDraw: drawItems}))}
            >
                {content.draw}
            </button>
            <button
                className={styles.button}
                data-testid="shuffle-a-card"
                onClick={() => dispatch(shuffle(deckItems))}
            >
                {content.shuffle}
            </button>
            <button
                className={styles.button}
                data-testid="sort-a-card"
                onClick={() => dispatch(sortCards(drawItems))}
            >
                {content.sort}
            </button>
            <button
                className={styles.button}
                data-testid="show-a-card"
                onClick={() => dispatch(showDeck(!showDeckCards))}
            >
                { showDeckCards ? content.hide : content.show }
            </button>
            <button
            className={styles.button}
            data-testid="reset-a-card"
            onClick={() => dispatch(reset())}
            >
                {content.reset}
            </button>
        </div>
    )
}
