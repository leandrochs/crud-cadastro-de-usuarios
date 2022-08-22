import { Route, Switch } from 'react-router-dom';
import { Provider } from './context/Provider';
import Login from './pages/Login';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    </Provider>
  );
}

export default App;
