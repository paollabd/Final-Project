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
	title: 'Test',
	text: 'Test Text',
	author: 'Paolla Dutra'
}

// test route
router.get('/test', (req, res) => {
	db.collection('userPosts')
	  // setting and ID for the test doc
	  .doc('test-doc')
	  .set(sampleData)
	  .then(function() {
		  res.send("Document successfully written!");
	  })
	  .catch(function(error) {
		  res.send("Error writing document: ", error);
	});
})

router.get("/", (req,res) => {
	let ColorNumOneVal = req.query.ColorNumOne ? req.query.ColorNumOne : '';
	let ColorNumTwoVal = req.query.ColorNumTwo ? req.query.ColorNumTwo : '';
	let ColorNumThreeVal = req.query.ColorNumThree ? req.query.ColorNumThree : '';
	let ColorNumFourVal = req.query.ColorNumFour ? req.query.ColorNumFour : '';
	let userHandleVal = req.query.userHandle ? req.query.userHandle : '';
	let userIDVal = req.query.userID ? req.query.userID : '';

	db.collection('userPosts')
	.add({
		ColorNumOne: ColorNumOneVal,
		ColorNumTwo: ColorNumTwoVal,
		ColorNumThree: ColorNumThreeVal,
		ColorNumFour: ColorNumFourVal,
		userHandle: userHandleVal,
		userID: userIDVal
	})
	.then(ref => res.send(ref)) //send the data
	.catch(e => res.send(e));
})
//we're exporting the router here.
module.exports = router;



















