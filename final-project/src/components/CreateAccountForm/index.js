import React from "react";

export default function CreateAccountForm({signupFunction}) {
	return (
		<div>
			<form onSubmit={e => signupFunction(e)}>
				<div className='createInputs'>
					<h2>Create Your Account!</h2>
					<label htmlFor='createName'>Name</label><br/>
					<input type="name" name="createName" placeholder="your name (first, last)" />
					<br/>
					<br/>
					<label htmlFor='createEmail'>Email</label><br/>
					<input type="email" name="createEmail" placeholder="email" />
					<br/>
					<br/>
					<label htmlFor='createPassword'>Password</label><br/>
					<input type="password" name="createPassword" placeholder="password" />
					<br/>
					<button className='createBtn'>Create Account</button>
				</div>
			</form>	
		</div>
	);
}