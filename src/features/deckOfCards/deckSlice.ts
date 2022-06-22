import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { drawCard, makeDeckCard, sortDrawnCards, shuffleItems } from './utils';

export interface DeckState {
  deck: any;
  draw: any;
  show: any;
}

const initialState: DeckState = {
  deck: [],
  draw: [],
  show: true,
};

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    init: (state) => {
      state.deck = makeDeckCard();
    },
    showDeck: (state, action: PayloadAction<any>) => {
      state.show = action.payload;
    },
    reset: (state) => {
      state.deck = makeDeckCard();
      state.draw = [];
      state.show = true;
    },
    shuffle: (state, action: PayloadAction<any>) => {
      state.deck = shuffleItems(action.payload);
    },
    draw: (state, action: PayloadAction<any>) => {
      const witdraw = drawCard(action.payload.deck, action.payload.currentDraw);
      if(witdraw.randIndex !== -1) {
        state.draw = witdraw.draw
        state.deck = witdraw.deck
      }
    },
    sortCards: (state,  action: PayloadAction<any>) => {
      state.draw = sortDrawnCards(action.payload);
    },
  },
});

export const { init, reset, shuffle, draw, sortCards, showDeck } = deckSlice.actions;

// The function below is called a selector and allows us to select a value from
export const selectDeck = (state: RootState) => state.deck.deck;
export const selectDraw = (state: RootState) => state.deck.draw;
export const selectShow = (state: RootState) => state.deck.show;

export default deckSlice.reducer;
