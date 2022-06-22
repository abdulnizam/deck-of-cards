import { Decker } from './features/deckOfCards/decker';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main-container" data-testid="main-container">
        <Decker />
      </div>
    </div>
  );
}

export default App;
