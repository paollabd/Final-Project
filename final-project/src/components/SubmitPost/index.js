import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Feed(userName) {
	// e.preventDefault(e); // stops form from performing its typical action
	// let inputValue = e.currentTarget.inputName
	// let inputValue;
	  const [errors, setErrors] = useState(false);
	  function submitApi(e) {
	    
	    let ColorNumOne = e.currentTarget.ColorNumOne.value
	    let ColorNumTwo = e.currentTarget.ColorNumTwo.value
	    let ColorNumThree = e.currentTarget.ColorNumThree.value
	    let ColorNumFour = e.currentTarget.ColorNumFour.value
	  	console.log('color1', ColorNumOne);
	  	console.log('color2', ColorNumTwo);
	  	console.log('color3', ColorNumThree);
	  	console.log('color4', ColorNumFour);
	  	console.log('userName', userName);

	    axios.get(`https://alteriormotive.herokuapp.com/submit?ColorNumOne=${ColorNumOne}&ColorNumTwo=${ColorNumTwo}&ColorNumThree=${ColorNumThree}&ColorNumFour=${ColorNumFour}&userName=${userName}`)
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
				<input type="text" name="ColorNumOne" placeholder="HEX code for color#1" />
				<br/>
				<label htmlFor="ColorNumTwo">Color#2</label>
				<br/>
				<input type="text" name="ColorNumTwo" placeholder="HEX code for color#2" />
				<br/>
				<label htmlFor="ColorNumThree">Color#3</label>
				<br/>
				<input type="text" name="ColorNumThree" placeholder="HEX code for color#3" />
				<br/>
				<label htmlFor="ColorNumFour">Color#4</label>
				<br/>
				<input type="text" name="ColorNumFour" placeholder="HEX code for color#4" />
				<br/>
				<button>Submit Form</button>
			</form>
		</div>
	);
}