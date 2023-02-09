// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAY-b0XiCkL8PCkD7PWZ-uPfy08Uj02Byg",
	authDomain: "todo-app-21bf4.firebaseapp.com",
	projectId: "todo-app-21bf4",
	storageBucket: "todo-app-21bf4.appspot.com",
	messagingSenderId: "609528454068",
	appId: "1:609528454068:web:12d0c543e969ed2886b0e1",
	measurementId: "G-1ML0RB75L4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export {firestore};
