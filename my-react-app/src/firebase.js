import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBm2GCVJtVdkXA_tm-API26AAvSPUnLtLk",
    authDomain: "portfolio-5c266.firebaseapp.com",
    databaseURL: "https://portfolio-5c266.firebaseio.com",
    projectId: "portfolio-5c266",
    storageBucket: "portfolio-5c266.appspot.com",
    messagingSenderId: "487201975166"
  };
  
firebase.initializeApp(config);
export default firebase;