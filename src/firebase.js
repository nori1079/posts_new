import * as firebase from "firebase";

var FirebaseConfig = {
  apiKey: "AIzaSyAOwGGZEiORPQBkYJ_988t7ZykxrUBI6r8",
  authDomain: "postsnew-bdf26.firebaseapp.com",
  databaseURL: "https://postsnew-bdf26.firebaseio.com",
  projectId: "postsnew-bdf26",
  storageBucket: "postsnew-bdf26.appspot.com",
  messagingSenderId: "528112656491",
  appId: "1:528112656491:web:e7e16e52d49da5735b112e",
  measurementId: "G-5NF180GKCM"
};

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.firestore();
export const postsRef = databaseRef.collection("posts");
export const provider = new firebase.auth.GoogleAuthProvider();
