import React, {useEffect, useState} from "react";
import axios from "axios";
import "./style.css";

export default function HomePage({ user }) {
	const [colors, setColors] = useState({});
	// const [users, setUsers] = useState({});
	// const [allUsers, setAllUsers] = useState({});

	function makePostRequest() {
	    axios.get("https://alteriormotive.herokuapp.com/")
	    .then(function(response) {
	    	setColors(response.data);
        	console.log('response', response);
        	return response;
        })
        .catch(function(error) {
        	console.log('error', error);
        })
	}

	// function getUser(userId) {
	// 	axios.get(`https://alteriormotive.herokuapp.com/get-user/${userId}`)
	//     .then(function(response) {
	//     	setUsers(response.data);
 //        	console.log('User responsess', response.data);
 //        	console.log('profile posts', response.data.userPosts);
 //        	return response;
 //        })
 //        .catch(function(error) {
 //        	console.log('error', error);
 //        })
	// }
	// function getAllUsers() {
	// 	axios.get(`https://alteriormotive.herokuapp.com/getallusers`)
	//     .then(function(response) {
	//     	setAllUsers(response.data);
 //        	console.log('User response', response.data);
 //        	return response;
 //        })
 //        .catch(function(error) {
 //        	console.log('error', error);
 //        })
	// }
	useEffect(() => {
		makePostRequest();
		// getUser(user.uid);
		// getAllUsers();
	}, [])

	console.log('user', user);
	
	let styleColors = [];

	(colors[0] && colors.map((doc, i) => {
		let styleee = [];
		styleee.push(doc.ColorNumOne, doc.ColorNumTwo, doc.ColorNumThree, doc.ColorNumFour);
		styleColors.push(styleee);
	}))
	console.log("style colors", styleColors);
	console.log("colors:", colors);
	// console.log("users", allUsers);

	return (
		<div>
			<div className='userBio'>
				<h1>Home for Accessible Color Palettes</h1>
			</div>

			<div className='postsContainer'>

					{colors[0] && styleColors.map((doc, i) =>
						<div key={i} className='postsBox'>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][0]}`}}>#{styleColors[i][0]}</div>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][1]}`}}>#{styleColors[i][1]}</div>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][2]}`}}>#{styleColors[i][2]}</div>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][3]}`}}>#{styleColors[i][3]}</div>
							<h2>by {colors[i] && colors[i].userHandle}</h2>
						</div>

	
					)}
			</div>

		</div>
	);
}
