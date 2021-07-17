import logo from './logo.svg';
import './App.css';

export function App() {
  const message = 'How are you?';

  function respondToHappy() {
    alert('Awesome!');
  }

  function respondToBlue() {
    alert('It\'s okay!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, {message}
        </p>
        <p>
          <button onClick={respondToHappy}>I am happy.</button>
        </p>
        <p>
          <button onClick={respondToBlue}>I am blue.</button>
        </p>
      </header>
    </div>
  );
}
