import React from 'react';
import Logo from '../../myLogo.svg'

export default function Header({ loggedIn, logoutFunction }) {
	return(
		<header className='Header'>
			<nav>
				<img src={Logo} style={{marginRight: '430px', width: '200px'}} />
				<a href='/'>Home</a>
				{loggedIn && <a href='/profile'>Profile</a>}
				{!loggedIn && <a href='/login'>Login</a>}
				{!loggedIn && <a href='/signup'>Signup</a>}
				<a href='/about'>Info</a>
				{loggedIn && <a onClick={() => logoutFunction()}>Logout</a>}
			</nav>
		</header>
	);
}