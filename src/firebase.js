import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB2QGMr9XQHRmgckDaw_JXutdDVDXLkFII",
  authDomain: "clone-13e57.firebaseapp.com",
  databaseURL: "https://clone-13e57.firebaseio.com",
  projectId: "clone-13e57",
  storageBucket: "clone-13e57.appspot.com",
  messagingSenderId: "545149643422",
  appId: "1:545149643422:web:b03b9b83e67f420324a98f",
  measurementId: "G-N0R6FPV4FW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
