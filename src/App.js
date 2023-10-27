import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      {/* <Sidebar />  */}
      <Switch>
        <Route path="/" exact component={SignIn} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </Router>
  );
}

export default App;
