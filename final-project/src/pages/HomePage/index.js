import React from "react";

import UserInformation from "../../components/UserProfileComponent"

export default function HomePage({ user }) {
	console.log('user', user);
	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
