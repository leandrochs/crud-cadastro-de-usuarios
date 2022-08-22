import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import User from './pages/User';
import { Provider } from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/user" component={ User } />
      </Switch>
    </Provider>
  );
}

export default App;
