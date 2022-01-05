import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa';
import { menuData } from '../data/MenuData';
// import logoImg from '../images/logoipsum-logo-8.svg';

const Nav = styled.nav`
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
`;

const NavLink = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 2rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled(Link)`
	${NavLink}
	font-style: italic;
`;

const MenuBars = styled(FaBars)`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		cursor: pointer;
		color: white;
		height: 40px;
		width: 40px;
		background-size: contain;
		position: absolute;
		top: 0;
		right: 2rem;
		transform: translate(-80%, 50%);

		&:hover {
			color: gray;
		}
	}
`;
const NavMenu = styled.div`
	display: flex;
	align-items: center;
	/* margin-right: -48px; */

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLink}
`;

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Navbar = ({ toggle }) => {
	return (
		<Nav>
			<Logo to="/">
				<img src="/images/logoipsum-logo-8.svg" alt="logo" />
			</Logo>
			<MenuBars onClick={toggle} />
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
				<NavBtn>
					<Button primary="true" to="/contact">
						Contact
					</Button>
				</NavBtn>
			</NavMenu>
		</Nav>
	);
};

export default Navbar;
