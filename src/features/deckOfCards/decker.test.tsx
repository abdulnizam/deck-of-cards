/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from '@testing-library/react';
import { Decker } from './decker';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('renders deck of cards component', () => { 
  const setup = () => render(
    <Provider store={store}>
      <Decker />
    </Provider>
  );

  beforeEach(() => {
    setup();
  });

  it('should render buttons', () => {
    expect(screen.getAllByTestId("buttons")).toHaveLength(1);
  });

  it('should render title deck', () => {
    expect(screen.getByTitle(/Deck/i)).toBeInTheDocument();
  });

  it('should render title Withdrawn', () => {
    expect(screen.getByTitle(/Withdrawn/i)).toBeInTheDocument();
  });

  it('should click Withdrawn 2 times and count 2 cards', () => {
    const card = screen.getByTestId("draw-a-card");
    const show = screen.getByTestId("show-a-card");
    fireEvent.click(card);
    fireEvent.click(card);
    fireEvent.click(show);
    const withdrawn = screen.getAllByTestId("cards-true");
    expect(withdrawn).toHaveLength(2);
  });

  it('should have 52 cards on the deck', () => {
    const deck = screen.getAllByTestId("cards-false");
    expect(deck).toHaveLength(52);
  });

});