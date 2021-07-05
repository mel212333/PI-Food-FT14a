import React from 'react';

import {NavLink} from 'react-router-dom';

import logoblanco from '../image/logoblanco.png';

import './NavBar.css'

export function Navbar(){
	return (
		<header className="navbar">
				<nav>
					<ul className="navdiv">
						<div className="imgLogo">
						<NavLink to="/home"><img src={logoblanco} alt="logo" className="imglo"/></NavLink>
						<NavLink to="/home" className="logo">Food </NavLink>
						</div>
						<NavLink to="/home/crear" className="listItem">Crear Receta</NavLink>
						<NavLink to="/home/about" className="listItem">About</NavLink>
						<div className="srch">
						{/* <Search/> */}
						</div>
					</ul>
				</nav>
			</header>
			
	)
}

export default Navbar