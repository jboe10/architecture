import HomePage from './components/pages/HomePage';
import './styles/main.sass';
import SubmitInfo from './components/pages/SubmitInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ProjectPage from './components/pages/ProjectPage';

function App() {
  return (
      <div className="App">
      <Router>
        <Switch>
          <Route path="/submit">
            <SubmitInfo/>
          </Route>
          <Route path="/projects">
            <ProjectPage/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </Router>
      </div>
  );
}

export default App;
