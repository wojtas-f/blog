import './style/App.scss'
import Blog from './components/Blog/Blog'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Gallery from './components/Gallery/Gallery'
import Page from './components/Page/Page'
import Login from './components/Partials/Login'
import Register from './components/Partials/Register'

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Blog />
					</Route>
					<Route path="/gallery" exact>
						<Gallery />
					</Route>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/register" exact>
						<Register />
					</Route>
					<Route path="/show/page/:id" exact>
						<Page />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
