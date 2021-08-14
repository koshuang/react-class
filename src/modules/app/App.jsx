import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Home } from '../home';
import { TodoList } from '../todo-list';
import './App.css';
import logo from './logo.svg';

export function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todos">Todos</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/todos">
              <TodoList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}
