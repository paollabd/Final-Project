import React from "react";
import "./../../pages/UserProfile/style.css"

export default function UserProfileComponent({ email }) {
	return (
		<div>
			<div className="email">Logged in user email is {email}</div>
		</div>
	);
}