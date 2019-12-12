import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Feed() {
	// e.preventDefault(e); // stops form from performing its typical action
	// let inputValue = e.currentTarget.inputName
	// let inputValue;
	  const [submitting, setSubmitting] = useState(false);
	  const [errors, setErrors] = useState(false);
	  function submitApi(e) {
	    setSubmitting(true)
	    e.preventDefault(e);
	    let ColorNum1 = e.currentTarget.ColorNum1.value
	    let ColorNum2 = e.currentTarget.ColorNum2.value
	    let ColorNum3 = e.currentTarget.ColorNum3.value
	    let ColorNum4 = e.currentTarget.ColorNum4.value
	    axios.get(`https://alteriormotive.herokuapp.com/submit?ColorNum1=${ColorNum1}&ColorNum2=${ColorNum2}&ColorNum3=${ColorNum3}&ColorNum4=${ColorNum4}`)
		.then(function(res) {
	      // do something, maybe reroute
	      setSubmitting(false);
	    })
	  }

	return (
		<div>
			<form onSubmit={e => submitApi(e)}>
				{errors && <p>Errors: {errors} </p>}
				<label htmlFor="colorHex1">Color#1</label>
				<br/>
				<input type="text" name="ColorNum1" placeholder="HEX code for color#1" />
				<br/>
				<label htmlFor="colorHex2">Color#2</label>
				<br/>
				<input type="text" name="ColorNum2" placeholder="HEX code for color#2" />
				<br/>
				<label htmlFor="colorHex3">Color#3</label>
				<br/>
				<input type="text" name="ColorNum3" placeholder="HEX code for color#3" />
				<br/>
				<label htmlFor="colorHex4">Color#4</label>
				<br/>
				<input type="text" name="ColorNum4" placeholder="HEX code for color#4" />
				<br/>
				<button>Submit Form</button>
			</form>
		</div>
	);
}
//{submitting && <p>We're submitting</p>}
	  // return (
	  //   <div>
	  //     <form onSubmit={e => submitApi(e)}>
	  //       {errors && <p>Errors: {errors} </p>}
	  //       <label htmlFor="inputName">inputName</label>
	  //       <input type="text" name="inputName" placeholder="text here" />
	  //       <button disabled={submitting}>Submit Form</button>
	  //       {submitting && <p>We're submitting</p>}
	  //     </form>
	  //   </div>
	  // );

	// return (
	// 	<div>
	// 		<form onSubmit={e => submitAPI(e)}>
	// 			<label htmlFor="Color#1">Color#1</label>
	// 			<br/>
	// 			<input type="text" name="Color#1" placeholder="HEX code for color#1" />
	// 			<br/>
	// 			<label htmlFor="Color#2">Color#2</label>
	// 			<br/>
	// 			<input type="text" name="Color#2" placeholder="HEX code for color#2" />
	// 			<br/>
	// 			<label htmlFor="Color#3">Color#3</label>
	// 			<br/>
	// 			<input type="text" name="Color#3" placeholder="HEX code for color#3" />
	// 			<br/>
	// 			<label htmlFor="Color#4">Color#4</label>
	// 			<br/>
	// 			<input type="text" name="Color#4" placeholder="HEX code for color#4" />
	// 			<br/>
	// 			<button type='submit'>Submit Form</button>
	// 		</form>
	// 	{post[0] && post.forEach(object => {
	// 		console.log(object.text);
	// 	})}
	// 	</div>
	// );
		// 	{post[0] && post.forEach(object => {
		// 	console.log(object.text);
		// })}