import React from 'react';
import Logo from '../../myLogo.svg'

export default function Header({ loggedIn, logoutFunction }) {
	return(
		<header className='Header'>
			<nav>
				<img src={Logo} style={{marginRight: '500px', width: '200px'}}/>
				{loggedIn && <a href='/'>Home</a>}
				{loggedIn && <a href='/profile'>Profile</a>}
				{!loggedIn && <a href='/login'>Log in</a>}
				{!loggedIn && <a href='/signup'>Signup</a>}
				{loggedIn && <a href='/about'>About</a>}
				{loggedIn && <a onClick={() => logoutFunction()}>Logout</a>}
			</nav>
		</header>
	);
}