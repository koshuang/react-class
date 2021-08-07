import { useState, useEffect } from 'react';

function callAPI() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  return fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }

        // Examine the text in the response
        return response.json().then(function(data) {
          console.log('response data', data.title);

          return data;
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}



export const MoodReaction = (props) => {
  const userName = props.name;

  // 裡面的 block 只會在第一次 render 的時候執行
  useEffect(() => {
    callAPI()
      .then((data) => {
        console.log('#### sresponse data', data.title);
        setTitle(data.title);
      });
  }, []);

  const [response, setResponse] = useState('None');
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState('Title');
  // let visible = false;
  // function setVisible(v) { visible = v; }

  // event handler: click event
  function respondToHappy() {
    setResponse(`Awesome! ${userName}`);
    setVisible(true);
  }

  function respondToBlue() {
    setResponse(`It's okay! ${userName}`);
    setVisible(false);
  }

  console.log('RENDER', response);

  return (
    <div>
      <p>
        <button onClick={respondToHappy}>I am happy. {userName}</button>
      </p>
      <p>
        <button onClick={respondToBlue}>I am blue.</button>
      </p>
      {visible && (
        <p>
          Response: {response}
        </p>
      )}
      {title}
    </div>
  );
}
