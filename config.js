import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAs7SOF2Y7Npzq--subsjDikIICKAQORIk",
    authDomain: "story-hub-5b26b.firebaseapp.com",
    projectId: "story-hub-5b26b",
    storageBucket: "story-hub-5b26b.appspot.com",
    messagingSenderId: "501018252302",
    appId: "1:501018252302:web:f9a5022818f753b767d85f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()