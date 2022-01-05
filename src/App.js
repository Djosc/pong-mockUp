import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';

import { SliderData } from './data/SliderData';

import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';

function App() {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Router>
				<GlobalStyle />
				<Navbar toggle={toggle} />
				<Dropdown isOpen={isOpen} toggle={toggle} />
				<MainSlider slides={SliderData} />
			</Router>
		</>
	);
}

export default App;
