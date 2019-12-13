/*
* @Author: Paolla
* @Date:   2019-12-12 13:35:49
* @Last Modified by:   Paolla
* @Last Modified time: 2019-12-12 14:04:32
*/
// getting a single user

const express = require('express');
const router = express.Router();
const firebase = require('firebase');

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

router.get("/:id", (req, res) => {
	let queryID = req.params.id;
	db.collection("users").doc(queryID)
	.get()
	.then(doc => res.send(doc.data()))
	.catch(error => res.send(error));
})

module.exports = router;

