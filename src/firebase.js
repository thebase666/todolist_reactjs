import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD3eFH4C0ZW6ZKKW2nDj-Hn6qkX6LEgV88",
    authDomain: "todoapp-de2fd.firebaseapp.com",
    projectId: "todoapp-de2fd",
    storageBucket: "todoapp-de2fd.appspot.com",
    messagingSenderId: "334162624153",
    appId: "1:334162624153:web:8d3040c4a0e849c99c0208",
    measurementId: "G-8DXTG37X6S"
  });

  const db = firebaseApp.firestore();

  export default db;