import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSlider from './components/MainSlider';

import { SliderData } from './data/SliderData';

import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData, InfoDataTwo, InfoDataThree, InfoDataFour } from './data/InfoData';
import ImageBackground from './images/Art-Background.jpg';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	// Might try to add parallax effect
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Router>
				<GlobalStyle />
				<Navbar toggle={toggle} />

				<div
					style={{
						backgroundImage: `url(${ImageBackground})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						width: '100%',
						height: '100%',
						zindex: '-2',
						// transform: `translateY(${offsetY * 0.5}px)`,
					}}
				>
					<Dropdown isOpen={isOpen} toggle={toggle} />
					<MainSlider slides={SliderData} />
					<InfoSection {...InfoData} />
					<InfoSection {...InfoDataTwo} />
					<InfoSection {...InfoDataThree} />
					<InfoSection {...InfoDataFour} />
				</div>
			</Router>
		</>
	);
}

export default App;
