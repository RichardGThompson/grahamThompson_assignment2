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
import { useContext } from 'react/cjs/react.development';
import { UsersContext } from './context/users-context';


function App() {
  
  const userContext = useContext(UsersContext);

  // For the purposes of this assignment we are using placeholder users. Ideally this would be pulled from a DB, however, that is outside of the scope of this assignment.
  userContext.addUser({name:"Graham", imageURL:"avatar001.png"});
  userContext.addUser({name:"Morgan", imageURL:"avatar002.png"});
  
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
