import * as firebase from "firebase";

 var config = {
    apiKey: "AIzaSyALEt2yipfCD_kNGCs3ygw7IjSKoWtKF78",
    authDomain: "meetingappp.firebaseapp.com",
    databaseURL: "https://meetingappp.firebaseio.com",
    projectId: "meetingappp",
    storageBucket: "meetingappp.appspot.com",
    messagingSenderId: "1060473342626"
  };
  firebase.initializeApp(config);

export default firebase;