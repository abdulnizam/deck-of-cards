import { RootState } from '../../app/store';
import deckerReducer, {
  DeckState,
  init,
  reset,
  shuffle,
  draw,
  sortCards,
  selectDeck,
  selectDraw,
  showDeck,
  selectShow
} from './deckSlice';

describe('Decker reducer', () => {
  const initialState: DeckState = {
    deck: [],
    draw: [],
    show: true,
  };
  it('should handle initial state', () => {
    expect(deckerReducer(undefined, { type: 'unknown' })).toEqual({
      deck: [],
      draw: [],
      show: true,
    });
  });

  it('should handle init', () => {
    const actual = deckerReducer(initialState, init());
    expect(actual.deck.length).toEqual(52);
  });

  it('should handle reset', () => {
    const actual = deckerReducer(initialState, reset());
    expect(actual.deck.length).toEqual(52);
  });

  it('should handle shuffle', () => {
    const actual = deckerReducer(initialState, shuffle([{
      suit:"diams",
      suitIndex:0,
      rank:"ace",
      rankIndex:0,
    },{
      suit:"diams",
      suitIndex:1,
      rank:1,
      rankIndex:0,
    }]));
    expect(actual.deck[0].rank).toEqual(1);
  });

  it('should handle draw', () => {
    const actual = deckerReducer(initialState, draw({deck: [{
      suit:"diams",
      suitIndex:0,
      rank:"ace",
      rankIndex:0,
    }], currentDraw: []}));
    expect(actual.draw[0].rank).toEqual("ace");
    expect(actual.deck.length).toEqual(0);
  });

  it('should handle showDeck to be true', () => {
    const actual = deckerReducer(initialState, showDeck(true));
    expect(actual.show).toEqual(true);
  });

  it('should handle showDeck to be false', () => {
    const actual = deckerReducer(initialState, showDeck(false));
    expect(actual.show).toEqual(false);
  });

  it('should handle sortCards', () => {
    const actual = deckerReducer(initialState, sortCards([{
      suit:"diams",
      suitIndex:0,
      rank: 5,
      rankIndex:0,
    },{
      suit:"diams",
      suitIndex:1,
      rank: 6,
      rankIndex:0,
    }]));
    expect(actual.draw[0].rank).toEqual(5);
  });
  
  it('should test selectDeck selector', () => {
    const deck: DeckState = {
      deck: [],
      draw: [],
      show: false,
    };

    const result = selectDeck({deck} as RootState);
    expect(result).toEqual([]);
  });

  it('should test selectDraw selector', () => {
    const deck: DeckState = {
      deck: [],
      draw: [{
        suit:"diams",
        suitIndex:0,
        rank: 5,
        rankIndex:0,
      }],
      show: false,
    };

    const result = selectDraw({deck} as RootState);
    expect(result).toEqual([{
      suit:"diams",
      suitIndex:0,
      rank: 5,
      rankIndex:0,
    }]);
  });

  it('should test selectShow selector', () => {
    const deck: DeckState = {
      deck: [],
      draw: [],
      show: false,
    };

    const result = selectShow({deck} as RootState);
    expect(result).toEqual(false);
  });
 
});
