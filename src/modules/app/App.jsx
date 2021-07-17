import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MoodReaction = (props) => {
  const name = props.name;

  const [response, setResponse] = useState('None');

  function respondToHappy() {
    setResponse(`Awesome! ${name}`);
  }

  function respondToBlue() {
    setResponse(`It's okay! ${name}`);
  }

  console.log('RENDER');

  return (
    <div>
      <p>
        <button onClick={respondToHappy}>I am happy.</button>
      </p>
      <p>
        <button onClick={respondToBlue}>I am blue.</button>
      </p>
      <p>
        Response: {response}
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
