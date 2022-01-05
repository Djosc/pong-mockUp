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

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	const [isOpen, setIsOpen] = useState(false);
	// const [offsetY, setOffsetY] = useState(0);
	// const handleScroll = () => setOffsetY(window.pageYOffset);

	// Might try to add parallax effect
	useEffect(() => {
		// window.addEventListener('scroll', handleScroll);
		AOS.init({ duration: 2000 });
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
					<div data-aos="fade-left">
						<InfoSection {...InfoData} />
					</div>
					<div data-aos="fade-right">
						<InfoSection {...InfoDataTwo} />
					</div>
					<div data-aos="fade-left">
						<InfoSection {...InfoDataThree} />
					</div>
					<div data-aos="fade-right">
						<InfoSection {...InfoDataFour} />
					</div>
				</div>
			</Router>
		</>
	);
}

export default App;
