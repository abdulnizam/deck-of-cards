import { suits, ranks, deckSize } from './contant';

export const makeDeckCard = ( ) => {
    const deck = []
    for( var i = 0; i < deckSize; i++ ) {
        deck.push({
            suit: suits[Math.floor(i / ranks.length)],
            suitIndex:  Math.floor(i / ranks.length),
            rank: ranks[i % ranks.length],
            rankIndex: i % ranks.length,
        }); 
    }
    return deck;
};

export const shuffleItems = (deck: any) => {
    const newArray = [].concat(deck);
    for (let i = newArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
      }
    return newArray;
  }

export const sortDrawnCards = (draw: any) => {
    const newArray = [].concat(draw);
    return newArray.sort((a: any, b: any) => {
        if (a.suitIndex < b.suitIndex ||
            (a.suitIndex === b.suitIndex && a.rankIndex < b.rankIndex)) {
            return -1;
        }
        return 1;
    });
}

export const drawCard = (deck: any, current: any) => {
    let card, remainDeck, randIndex;
    if( deck.length > 0 ) {
        randIndex = Math.floor( Math.random() * deck.length );
        card = deck[randIndex];
        remainDeck = deck.slice(0, randIndex).concat(deck.slice(randIndex + 1));
    }
    return {
        draw: [...current, card],
        deck: remainDeck,
        randIndex
    };
}