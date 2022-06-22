import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders Main Container', () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getAllByTestId("main-container")).toHaveLength(1);
});
