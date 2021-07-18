import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const MoodReaction = (props) => {
  const name = props.name;
  const component = props.component;

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
      <Card title={<FancyTitle title={name} />}>
        {component}
      </Card>
    </div>
  );
}

function FancyTitle(props) {
  const title = props.title;

  return (
    <div style={{color: 'red'}}>
      {title}
    </div>
  );
}

function Hello() {
  return (
    <div>hello!</div>
  );
}

function Card(props) {
  const component = props.children;
  const title = props.title;

  return (
    <>
      <h1>
        {title}
      </h1>
      <h2>
        {component}
      </h2>
    </>
  );
}

export function App() {
  const message = 'How are you?';
  const name = 'Apple';

  return (
    <div className="App">
      <AppHeader message={message} />
      <MoodReaction name={name} component={<Hello />} />
    </div>
  );
}

function AppHeader(props) {
  const { message } = props;
  
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hi, {message}</p>
    </header>
  );
}
