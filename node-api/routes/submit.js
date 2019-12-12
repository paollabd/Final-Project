// File: /routes/submit.js

const express = require('express');
const router = express.Router();
const firebase = require('firebase');

// firebase config
var firebaseConfig = {
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

// submit data
// router.get('/', (req, res) => {
// 	// localhost:4000/submit?title=title&text=text&author=authornamewhatever
// 	let titleVal = req.query.title ? req.query.title : '';
// 	let textVal = req.query.text ? req.query.text : '';
// 	let authorVal = req.query.author ? req.query.author : '';
// 	db.collection('userPosts')
// 	.add({ // getting URL parameters
// 		title: titleVal,
// 		text: textVal,
// 		author: authorVal
// 	})
// 	.then(ref => res.send(ref))
// 	.catch(e => res.send(e));
// })

router.get("/", (req,res) => {
	let ColorNum1Val = req.query.ColorNum1 ? req.query.ColorNum1: '';
	let ColorNum2Val = req.query.ColorNum2 ? req.query.ColorNum2: '';
	let ColorNum3Val = req.query.ColorNum3 ? req.query.ColorNum3: '';
	let ColorNum4Val = req.query.ColorNum4 ? req.query.ColorNum4: '';
	db.collection('userPosts')
	.add({
		ColorNum1: ColorNum1Val,
		ColorNum2: ColorNum2Val,
		ColorNum3: ColorNum3Val,
		ColorNum4: ColorNum4Val
		})
		.then(ref => res.send(ref)) //send the data
	    .catch(e => res.send(e));
} )
​
//we're exporting the router here.
module.exports = router;



















