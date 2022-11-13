import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBxXxv5kQYegFzUDOW2EhtxATsC1ADMfzk",
    authDomain: "pj-71-42869.firebaseapp.com",
    projectId: "pj-71-42869",
    storageBucket: "pj-71-42869.appspot.com",
    messagingSenderId: "1008478498905",
    appId: "1:1008478498905:web:c1dda94e595a4a9cbc0148"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
