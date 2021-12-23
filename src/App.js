// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route to="/" exact />
				</Routes>
			</Router>
		</>
	);
}

export default App;
