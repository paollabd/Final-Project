/*
* @Author: Paolla
* @Date:   2019-12-12 13:35:59
* @Last Modified by:   Paolla
* @Last Modified time: 2019-12-12 13:50:30
*/
// File: /routes/submit.js

const express = require('express');
const router = express.Router();
const firebase = require('firebase');

// firebase config
let firebaseConfig = {
	apiKey: "AIzaSyAdJ7BqhuvwsCM6VYIxJmsF_V87WKz61AM",
	authDomain: "pbd244-final-project.firebaseapp.com",
	databaseURL: "https://pbd244-final-project.firebaseio.com",
	projectId: "pbd244-final-project",
	storageBucket: "pbd244-final-project.appspot.com",
	messagingSenderId: "672333688295",
	appId: "1:672333688295:web:fa193762b76bb041892142",
	measurementId: "G-1WM6BX334N"
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// set sample data to submit upon request
const sampleData = {
	name: 'Test Text',
	userId: 'Paolla Dutra'
}

router.get("/", (req,res) => {
	let nameVal = req.query.name ? req.query.name : '';
	let userIdVal = req.query.userId ? req.query.userId : '';

	db.collection('users').doc(userIdVal)
	.set({
		name: nameVal,
	})
	.then(ref => res.send(ref)) //send the data
	.catch(e => res.send(e));
})
//we're exporting the router here.
module.exports = router;



















