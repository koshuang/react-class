import { Food, MoodReaction } from '../mood';
import './App.css';
import logo from './logo.svg';

export function App() {
  const message = 'How are you?';
  const userName = 'Apple';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, {message}</p>
        <MoodReaction name={userName} />
        <Food />
      </header>
    </div>
  );
}
