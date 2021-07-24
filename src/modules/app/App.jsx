import logo from './logo.svg';
import './App.css';
import { MoodReaction } from '../mood/components/MoodReaction';

export function App() {
  const message = 'How are you?';
  const name = 'Apple';

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi, {message}</p>
        <MoodReaction name={name} />
      </header>
    </div>
  );
}
