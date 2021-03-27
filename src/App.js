import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Teams from './Components/Teams/Teams';
import NoMatch from './Components/NoMatch/NoMatch';
import TeamDetails from './Components/TeamDetails/TeamDetails';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" >
          <Header></Header>
          </Route>
          <Route path="/header" >
          <Header></Header>
          </Route>
          <Route path="/header/teams" >
          <Teams></Teams>
          </Route>
          <Route path="/team/:id" >
          <TeamDetails></TeamDetails>
          </Route>
          <Route path="*" >
          <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
      
  );
}

export default App;
