import React, {useEffect, useState} from "react";
import axios from "axios";

import UserInformation from "../../components/UserProfileComponent"
import SubmitPost from "../../components/SubmitPost"
import "./style.css"


export default function UserProfile({ user }) {

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
				<h1>Profile</h1>
				<h2>Hello, Friend{user.uid && user.name}!</h2>
				<h2>This is your UserID: {user.uid && user.uid}</h2>
				<UserInformation className='email' email={user.email ? user.email : 'whoops'}/>
			</div>
			<div className='postsContainer'>
				<div className='postsBox'>
					<div className='submitForm'>
						<SubmitPost className='submitForm'/>
					</div>
					<h2>Share your ideas</h2>
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
