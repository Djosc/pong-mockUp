import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';

import { SliderData } from './data/SliderData';

import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from './data/InfoData';

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
				<InfoSection {...InfoData} />
				<InfoSection {...InfoDataTwo} />
				<InfoSection {...InfoDataThree} />
				<InfoSection {...InfoDataFour} />
			</Router>
		</>
	);
}

export default App;
