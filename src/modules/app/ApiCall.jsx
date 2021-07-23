import { useEffect, useState } from 'react';

const fetcher = url => fetch(url).then(r => r.json());

export function ApiCall() {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetcher('https://jsonplaceholder.typicode.com/todos/1')
      .then((result) => setTodo(result));
  }, [setTodo]);

  if (!todo) {
    return null;
  }

  return (
    <div>
      {todo.title}
    </div>
  );
}
