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

const firestoreDatabase = firebase.initializeApp(firebaseConfig);
const bd = firestoreDatabase.firestore();

let posts = [];
bd.collection('userPosts').get()
	.then(
		blogPosts => {
			blogPosts.forEach(post => { // returns the JSON file so we can dsiplay it on the web page
				posts.push(post.data());
				console.log('blogPosts', post.data());
			})
		}
	)
	.catch(err => {
			console.log('error', err) 
	})

router.get('/', (req, res) => {
	res.send(posts);
})

module.exports = router;


// const express = require('express');
// const router = express.Router();
// const firebase = require('firebase');

// let firebaseConfig = {
// 	apiKey: "AIzaSyAdJ7BqhuvwsCM6VYIxJmsF_V87WKz61AM",
// 	authDomain: "pbd244-final-project.firebaseapp.com",
// 	databaseURL: "https://pbd244-final-project.firebaseio.com",
// 	projectId: "pbd244-final-project",
// 	storageBucket: "pbd244-final-project.appspot.com",
// 	messagingSenderId: "672333688295",
// 	appId: "1:672333688295:web:fa193762b76bb041892142",
// 	measurementId: "G-1WM6BX334N"
// };

// const firestoreDatabase = firebase.initializeApp(firebaseConfig);
// const db = firestoreDatabase.firestore();

// let posts = [];
// let postRef = db.collection('userPosts');
// let allPosts = postRef.onSnapshot( snapshot => {
// 			snapshot.forEach(doc => { // returns the JSON file so we can dsiplay it on the web page
// 				posts.push(posts.data());
// 				console.log('blogPosts', doc.data());
// 			})
// 		}, err => {
// 			console.log('error', err) 
// 	});

// router.get('/', (req, res) => {
// 	res.send(posts)
// })

// module.exports = router;