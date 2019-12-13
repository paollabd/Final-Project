import React from "react";

import UserInformation from "../../components/UserProfileComponent"
import "./style.css"

export default function HomePage({ user }) {
	const axios = require('axios');

	async function makePostRequest() {

	    axios.post("https://alteriormotive.herokuapp.com/")
	    .then(function(response) {
        	console.log('response', response);
        })
        .catch(function(error) {
        	console.log('error', error);
        })
	}

	makePostRequest();

	console.log('user', user);

	let styleColor01 = {
		alignItems: 'center',
		backgroundColor: 'black',
		color: 'white',
		height:'40px',
		padding: '10px',
		textAlign: 'center',
		width: '175px'
	}

	let styleColor02 = {
		alignItems: 'center',
		backgroundColor: 'grey',
		color: 'white',
		height:'30px',
		padding: '10px',
		textAlign: 'center',
		width: '175px'
	}

	let styleColor03 = {
		alignItems: 'center',
		backgroundColor: 'darkgrey',
		color: 'white',
		height:'25px',
		padding: '10px',
		textAlign: 'center',
		width: '175px'
	}

	let styleColor04 = {
		alignItems: 'center',
		backgroundColor: 'lightgrey',
		color: 'white',
		height:'20px',
		padding: '10px',
		textAlign: 'center',
		width: '175px'
	}
	return (
		<div>
			<div className='userBio'>
				<h1>About Page</h1>
			</div>
			<div className='postsContainer'>
				<div className='postsBox'>
					<div className='styleColor' style={styleColor01}>#hex</div>
					<div className='styleColor' style={styleColor02}>#hex</div>
					<div className='styleColor' style={styleColor03}>#hex</div>
					<div className='styleColor' style={styleColor04}>#hex</div>
					<h2>Name</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={styleColor01}>#hex</div>
					<div className='styleColor' style={styleColor02}>#hex</div>
					<div className='styleColor' style={styleColor03}>#hex</div>
					<div className='styleColor' style={styleColor04}>#hex</div>
					<h2>Name</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={styleColor01}>#hex</div>
					<div className='styleColor' style={styleColor02}>#hex</div>
					<div className='styleColor' style={styleColor03}>#hex</div>
					<div className='styleColor' style={styleColor04}>#hex</div>
					<h2>Name</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={styleColor01}>#hex</div>
					<div className='styleColor' style={styleColor02}>#hex</div>
					<div className='styleColor' style={styleColor03}>#hex</div>
					<div className='styleColor' style={styleColor04}>#hex</div>
					<h2>Name</h2>
				</div>
				<div className='postsBox'>
					<div className='styleColor' style={styleColor01}>#hex</div>
					<div className='styleColor' style={styleColor02}>#hex</div>
					<div className='styleColor' style={styleColor03}>#hex</div>
					<div className='styleColor' style={styleColor04}>#hex</div>
					<h2>Name</h2>
				</div>
			</div>

		</div>
	);
}
