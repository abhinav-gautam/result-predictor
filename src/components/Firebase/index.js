import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDb4gXoMuP5sBXlCq_8RANO-xNjsRAz0i8",
    authDomain: "results-994c3.firebaseapp.com",
    databaseURL: "https://results-994c3.firebaseio.com",
    projectId: "results-994c3",
    storageBucket: "results-994c3.appspot.com",
    messagingSenderId: "864936938014",
    appId: "1:864936938014:web:ad194b8b14a7a39ec2bc0f",
    measurementId: "G-6RCZ7312QV"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export {storage, firebase as default};