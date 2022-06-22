import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import deckSlice from '../features/deckOfCards/deckSlice';

export const store = configureStore({
  reducer: {
    deck: deckSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
