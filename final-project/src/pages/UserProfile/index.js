import React, {useEffect, useState} from "react";
import axios from "axios";

import UserInformation from "../../components/UserProfileComponent"
import SubmitPost from "../../components/SubmitPost"
import "./style.css"


export default function UserProfile({ user }) {
	const [colors, setColors] = useState({});
	const [users, setUsers] = useState({});
	function makePostRequest() {
	    axios.get("https://alteriormotive.herokuapp.com/")
	    .then(function(response) {
	    	console.log('response', response.data);
	    	setColors(response.data);
        	return response;
        })
        .catch(function(error) {
        	console.log('error', error);
        })
	}

	function getUser(userId) {
		axios.get(`https://alteriormotive.herokuapp.com/get-user/${userId}`)
	    .then(function(response) {
	    	setUsers(response.data);
        	console.log('User response', response.data);
        	return response;
        })
        .catch(function(error) {
        	console.log('error', error);
        })
	}
	useEffect(() => {
		makePostRequest();
		getUser(user.uid);
	}, [user.uid])

	console.log('user', user);

	let styleColors = [];
	let userName;
	(colors[0] && colors.map((doc, i) => {
		let styleee = [];
		// if(doc.userHandle === users.name) {
		// 	styleee.push(doc.ColorNumOne, doc.ColorNumTwo, doc.ColorNumThree, doc.ColorNumFour);
		// 	styleColors.push(styleee);
		// }
		if(user.uid === doc.userID) {
			userName = doc.userHandle;
			styleee.push(doc.ColorNumOne, doc.ColorNumTwo, doc.ColorNumThree, doc.ColorNumFour);
			// console.log("pushhhh", doc.userHandle);
			styleColors.push(styleee);
		}
	}))
	// console.log("style colors", styleColors);
	console.log("colors", colors);
	return (
		<div>
			<div className='userBio'>
				<h1>Profile</h1>
				<h2>Hello, {userName}!</h2>
				<h2>This is your UserID: {user.uid && user.uid}</h2>
				<UserInformation className='email' email={user.email ? user.email : 'whoops'}/>
			</div>
			<div className='postsContainer'>
				<div className='postsBox'>
					<div className='submitForm'>
						<SubmitPost className='submitForm' users={users} user={user}/>
					</div>
					<h2>Share your ideas</h2>
				</div>

					{colors[0] && styleColors.map((doc, i) =>
						<div key={i} className='postsBox'>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][0]}`}}>
								<p>#{styleColors[i][0]}</p>
							</div>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][1]}`}}>
								<p>#{styleColors[i][1]}</p>
							</div>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][2]}`}}>
								<p>#{styleColors[i][2]}</p>
							</div>
							<div className='styleColor' style={{backgroundColor: `#${styleColors[i][3]}`}}>
								<p>#{styleColors[i][3]}</p>
							</div>
							<h2>by {userName}</h2>
						</div>
	
					)}
			</div>

		</div>
	);
}
