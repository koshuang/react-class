import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

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
        <TextInputWithFocusButton />
      </header>
    </div>
  );
}

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const [total, setTotal] = useState(0);
  const onButtonClick = () => {
    const input = inputEl.current;
    // `current` points to the mounted text input element
    setTotal(total + Number(input.value));
    input.value = '';
  };

  return (
    <>
      <input ref={inputEl} type="number" />
      <button onClick={onButtonClick}>Add</button>
      {total}
    </>
  );
}
