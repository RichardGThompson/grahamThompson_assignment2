import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { LandingPage } from './components/lp';
import { Browse } from './components/browse';
import { useContext } from 'react/cjs/react.development';
import { UsersContext } from './context/users-context';
import { v4 as uuid } from 'uuid';


function App() {
  const userContext = useContext(UsersContext);

  // For the purposes of this assignment we are using placeholder users. Ideally this would be pulled from a DB, however, that is outside of the scope of this assignment.
  userContext.addUser({uuid: uuid(), name:"Graham", imageURL:"avatar001.png", activeProfile:true});
  userContext.addUser({uuid: uuid(), name:"Morgan", imageURL:"avatar002.png", activeProfile:false});

  console.log(userContext.users);
  
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
