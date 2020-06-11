import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDIabjoTMnsUJQE3Sauvf-nUHlLm7TNqS0",
  authDomain: "booksanta-22b21.firebaseapp.com",
  databaseURL: "https://booksanta-22b21.firebaseio.com",
  projectId: "booksanta-22b21",
  storageBucket: "booksanta-22b21.appspot.com",
  messagingSenderId: "701622413567",
  appId: "1:701622413567:web:34e6b6fa669cf16f0cc4ca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();