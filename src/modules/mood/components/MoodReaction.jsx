import { useState } from 'react';

export const MoodReaction = (props) => {
  const name = props.name;

  const [response, setResponse] = useState('None');

  // event handler: click event
  function respondToHappy() {
    setResponse(`Awesome! ${name}`);
  }

  function respondToBlue() {
    setResponse(`It's okay! ${name}`);
  }

  console.log('RENDER', response);

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
