// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCMifH2xgS2Em_7DgBsX81UQUb38efaTCk",
    authDomain: "rc-app-6f4ca.firebaseapp.com",
    projectId: "rc-app-6f4ca",
    storageBucket: "rc-app-6f4ca.appspot.com",
    messagingSenderId: "91489040227",
    appId: "1:91489040227:web:e6771044070d61033c0556",
    measurementId: "G-H0YNXNF2L7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Initialize Cloud Firestore through Firebase


var db = firebase.firestore();
