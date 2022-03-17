// ! Connecting Firebase to our React frontend - it's this simple

import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCpYO3YcLg8VYAfFsHyCNFmfqjuvrj_Lkk",
  authDomain: "react-web-aa733.firebaseapp.com",
  projectId: "react-web-aa733",
  storageBucket: "react-web-aa733.appspot.com",
  messagingSenderId: "370118043997",
  appId: "1:370118043997:web:bd331f52fb74c14aea60b4",
  measurementId: 'G-WHBS1VMWRL',
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
//* This auth is everything that we need in order to get the authentication login sign in and all
