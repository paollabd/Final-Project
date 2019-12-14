import React from "react";
import axios from "axios";

export default function Feed({users, user}) {
	// e.preventDefault(e); // stops form from performing its typical action
	// let inputValue = e.currentTarget.inputName
	// let inputValue;
	function submitApi(e) {
		e.preventDefault();

		let ColorNumOne = e.currentTarget.ColorNumOne.value
		let ColorNumTwo = e.currentTarget.ColorNumTwo.value
		let ColorNumThree = e.currentTarget.ColorNumThree.value
		let ColorNumFour = e.currentTarget.ColorNumFour.value
		let userHandle = users.name;
		let uID = user.uid;
			console.log('color1', ColorNumOne);
			console.log('color2', ColorNumTwo);
			console.log('color3', ColorNumThree);
			console.log('color4', ColorNumFour);
			console.log('userHandle', userHandle);

		axios.get(`https://alteriormotive.herokuapp.com/submit?ColorNumOne=${ColorNumOne}&ColorNumTwo=${ColorNumTwo}&ColorNumThree=${ColorNumThree}&ColorNumFour=${ColorNumFour}&userHandle=${userHandle}&userID=${uID}`)
		.then(function(res) {
		  // do something, maybe reroute
		  console.log('response', res)
		  return res;
		})
	}

	return (
		<div>
			<form onSubmit={e => submitApi(e)}>
				<label htmlFor="ColorNumOne">Color#1</label>
				<br/>
				<input type="text" name="ColorNumOne" placeholder="example: 65BBB6" />
				<br/>
				<label htmlFor="ColorNumTwo">Color#2</label>
				<br/>
				<input type="text" name="ColorNumTwo" placeholder="example: A3E0FE" />
				<br/>
				<label htmlFor="ColorNumThree">Color#3</label>
				<br/>
				<input type="text" name="ColorNumThree" placeholder="example: AC5BCB" />
				<br/>
				<label htmlFor="ColorNumFour">Color#4</label>
				<br/>
				<input type="text" name="ColorNumFour" placeholder="example: 4A3E83" />
				<br/>
				<button>Submit Form</button>
			</form>
		</div>
	);
}