// import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';

import { SliderData } from './data/SliderData';

import './App.css';
import GlobalStyle from './globalStyles';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Navbar />
				<MainSlider slides={SliderData} />
			</Router>
		</>
	);
}

export default App;
