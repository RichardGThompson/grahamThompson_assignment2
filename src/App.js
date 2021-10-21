import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';
import { LandingPage } from './components/lp';
import { Browse } from './components/browse';

function App() {
  return (
    <div className="App">
      <div className="netflix-sans-font-loaded">
        <Router>
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>

            <Route exact path="/browse">
              <Browse/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
