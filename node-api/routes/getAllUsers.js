/*
* @Author: Paolla
* @Date:   2019-12-12 16:02:24
* @Last Modified by:   Paolla
* @Last Modified time: 2019-12-12 16:11:42
*/
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

let users = [];
db.collection('users').get()
	.then(
		blogPosts => {
			blogPosts.forEach(post => { // returns the JSON file so we can dsiplay it on the web page
				users.push(post.data());
				console.log('blogPosts', post.data());
			})
		}
	)
	.catch(err => {
			console.log('error', err) 
	})

router.get('/', (req, res) => {
	res.send(users);
})

module.exports = router;