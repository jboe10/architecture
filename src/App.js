import HomePage from './components/pages/HomePage';
import './styles/main.sass';
import ContactInfo from './components/pages/ContactInfo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProjectPage from './components/pages/ProjectPage';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					{/* <Route path="/games">
            <GamePage/>
          </Route> */}
					<Route path="/contact">
						<ContactInfo />
					</Route>
					<Route path="/projects">
						<ProjectPage />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
