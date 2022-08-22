import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Users';
import { Provider } from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/user" component={ Users } />
      </Switch>
    </Provider>
  );
}

export default App;
