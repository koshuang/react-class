import logo from './logo.svg';
import './App.css';

function MoodReaction(props) {
  const name = props.name;

  function respondToHappy() {
    alert(`Awesome! ${name}`);
  }

  function respondToBlue() {
    alert(`It's okay! ${name}`);
  }

  return (
    <div>
      <p>
        <button onClick={respondToHappy}>I am happy.</button>
      </p>
      <p>
        <button onClick={respondToBlue}>I am blue.</button>
      </p>
    </div>
  );
}

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
